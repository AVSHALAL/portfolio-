"""Collecte CERT-FR pour un portfolio statique. Aucune dépendance externe."""
import argparse
from datetime import datetime, timezone
from email.utils import parsedate_to_datetime
from html import escape, unescape
import json
from pathlib import Path
import re
import sys
from urllib.parse import urlparse
from urllib.request import Request, urlopen
import xml.etree.ElementTree as ET

FEEDS = ['https://cert.ssi.gouv.fr/avis/feed/', 'https://cert.ssi.gouv.fr/alerte/feed/']
START, END = '<!-- AUTO-WATCH:START -->', '<!-- AUTO-WATCH:END -->'

def safe_url(url):
    parsed = urlparse(url)
    return parsed.scheme == 'https' and parsed.hostname in ('cert.ssi.gouv.fr', 'www.cert.ssi.gouv.fr') and parsed.path.startswith(('/avis/', '/alerte/'))

def download(url):
    request = Request(url, headers={'User-Agent': 'AmaraPortfolioWatch/1.0 (educational RSS reader)'})
    with urlopen(request, timeout=30) as response:
        data = response.read(3_000_001)
    if len(data) > 3_000_000:
        raise ValueError('Réponse trop volumineuse')
    return data

def clean(text):
    return re.sub(r'\s+', ' ', unescape(re.sub(r'<[^>]+>', ' ', text or ''))).strip()

def parse_feed(data):
    root = ET.fromstring(data)
    if root.tag != 'rss' or root.find('channel') is None:
        raise ValueError('Flux RSS inattendu')
    found = []
    for item in root.findall('./channel/item'):
        title = clean(item.findtext('title'))
        description = clean(item.findtext('description'))
        url = (item.findtext('link') or '').strip()
        if not re.search(r'\b(?:fortinet|fortios|fortigate)\b', title + ' ' + description, re.I) or not safe_url(url):
            continue
        try:
            date = parsedate_to_datetime(item.findtext('pubDate')).astimezone(timezone.utc).isoformat()
        except (TypeError, ValueError, OverflowError):
            continue
        found.append({'title': title, 'url': url, 'published': date, 'source': 'CERT-FR'})
    return found

def render(data):
    checked = datetime.fromisoformat(data['checked_at'])
    state = ('Collecte exécutée par GitHub Actions. La prochaine exécution est prévue chaque jour à 06 h 17 UTC.'
             if data['github_run'] else 'Première collecte vérifiée. Activation de la mise à jour quotidienne sur GitHub en attente.')
    rows = []
    for item in data['items'][:12]:
        date = datetime.fromisoformat(item['published'])
        url = escape(item['url'], quote=True)
        rows.append(f'<li><time datetime="{escape(item["published"], quote=True)}">{date:%d/%m/%Y} · CERT-FR</time><h3>{escape(item["title"])}</h3><p class="feed-state">À lire · analyse personnelle non rédigée</p><span class="source-block"><span class="source-actions"><a class="source" href="{url}" target="_top" rel="noreferrer">Lire la publication ↗</a><button type="button" class="copy-source" data-copy-url="{url}">Copier le lien</button></span><span class="source-url">{url}</span></span></li>')
    listing = '<ul class="feed-list">' + ''.join(rows) + '</ul>' if rows else '<p>Aucune publication correspondant aux mots-clés dans les flux consultés. Les analyses précédentes restent disponibles.</p>'
    return f'<div class="feed-status" data-watch-checked="{escape(data["checked_at"], quote=True)}"><b>Dernière collecte réussie : {checked:%d/%m/%Y à %H:%M} UTC</b><p>{state}</p></div>' + listing + '<p class="note">Les flux RSS ne sont pas une archive exhaustive. Les publications déjà collectées sont conservées, dans la limite des 40 plus récentes.</p>'

def update(root, previous_url=None, github_run=False):
    path = root / 'data' / 'veille.json'
    previous = json.loads(path.read_text(encoding='utf-8')) if path.exists() else {'items': []}
    if previous_url:
        parsed = urlparse(previous_url)
        if parsed.scheme != 'https' or parsed.hostname != 'avshalal.github.io' or not parsed.path.startswith('/portfolio-/'):
            raise ValueError('URL historique non autorisée')
        try:
            previous = json.loads(download(previous_url))
        except Exception as exc:
            print(f'Historique publié indisponible : utilisation de la copie locale ({type(exc).__name__}).', file=sys.stderr)
    # Les deux sources doivent réussir. En cas d’échec, aucun fichier n’est modifié
    # et le workflow ne remplace pas le site actuellement en ligne.
    fresh = []
    for feed in FEEDS:
        fresh.extend(parse_feed(download(feed)))
    merged = {}
    for item in previous.get('items', []) + fresh:
        if not isinstance(item, dict) or not safe_url(item.get('url', '')):
            continue
        try:
            stamp = datetime.fromisoformat(item['published'])
            if stamp.tzinfo is None or not isinstance(item['title'], str):
                continue
        except (KeyError, TypeError, ValueError):
            continue
        key = urlparse(item['url']).path.rstrip('/')
        merged[key] = {k: item[k] for k in ('title', 'url', 'published')}
    data = {'checked_at': datetime.now(timezone.utc).isoformat(), 'github_run': github_run, 'sources': FEEDS,
            'items': sorted(merged.values(), key=lambda i: datetime.fromisoformat(i['published']), reverse=True)[:40]}
    page = root / 'veille.html'
    html = page.read_text(encoding='utf-8')
    if html.count(START) != 1 or html.count(END) != 1:
        raise ValueError('Balises de collecte manquantes ou dupliquées')
    before, rest = html.split(START)
    _, after = rest.split(END)
    updated = before + START + '\n' + render(data) + '\n' + END + after
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    page.write_text(updated, encoding='utf-8')
    print(f'Collecte réussie : {len(fresh)} entrées reçues, {len(data["items"])} publications conservées.')

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--root', type=Path, default=Path('dist'))
    parser.add_argument('--previous-url')
    parser.add_argument('--github-run', action='store_true')
    args = parser.parse_args()
    update(args.root, args.previous_url, args.github_run)
