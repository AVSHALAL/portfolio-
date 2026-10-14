from html.parser import HTMLParser
from pathlib import Path
import unittest

class Page(HTMLParser):
    def __init__(self, html):
        super().__init__()
        self.ids, self.links, self.images = [], [], []
        self.feed(html)
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            self.ids.append(attrs['id'])
        if tag in ('a', 'link') and 'href' in attrs:
            self.links.append(attrs['href'])
        if tag == 'script' and 'src' in attrs:
            self.links.append(attrs['src'])
        if tag == 'img':
            self.images.append(attrs.get('src', ''))

class SiteTests(unittest.TestCase):
    def test_static_pages(self):
        base = Path(__file__).parents[1]
        root = base / 'dist' if (base/'dist/index.html').exists() else base
        for filename in ('index.html', 'veille.html'):
            page = Page((root/filename).read_text(encoding='utf-8'))
            self.assertEqual(len(page.ids), len(set(page.ids)), filename)
            self.assertFalse(any('IMG_8140' in src for src in page.images))
            for href in page.links:
                if ':' in href or href.startswith('//'):
                    continue
                target, _, anchor = href.partition('#')
                self.assertTrue((root/target).exists() if target else True, href)
                if anchor:
                    target_page = Page((root/(target or filename)).read_text(encoding='utf-8'))
                    self.assertIn(anchor, target_page.ids, href)

if __name__ == '__main__':
    unittest.main()
