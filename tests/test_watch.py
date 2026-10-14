import importlib.util
import json
from pathlib import Path
import tempfile
import unittest
from unittest.mock import patch

spec = importlib.util.spec_from_file_location('watch', Path(__file__).parents[1] / 'scripts/update_watch.py')
watch = importlib.util.module_from_spec(spec)
spec.loader.exec_module(watch)

RSS = b'''<rss><channel><item><title>Fortinet &amp; FortiOS</title><link>https://cert.ssi.gouv.fr/avis/TEST/</link><pubDate>Wed, 14 Oct 2026 00:00:00 +0000</pubDate></item><item><title>Autre produit</title><link>https://cert.ssi.gouv.fr/avis/AUTRE/</link></item><item><title>Fortinet</title><link>javascript:alert(1)</link></item></channel></rss>'''

class WatchTests(unittest.TestCase):
    def test_filter_and_links(self):
        self.assertEqual(len(watch.parse_feed(RSS)), 1)
        self.assertFalse(watch.safe_url('https://cert.ssi.gouv.fr.evil.test/avis/a/'))
        self.assertFalse(watch.safe_url('javascript:alert(1)'))

    def test_invalid_response(self):
        with self.assertRaises(ValueError):
            watch.parse_feed(b'<html>maintenance</html>')

    def test_update_deduplication_and_escape(self):
        with tempfile.TemporaryDirectory() as d:
            root = Path(d)
            page = root / 'veille.html'
            page.write_text('Avant' + watch.START + 'ancien' + watch.END + 'Apres')
            with patch.object(watch, 'download', return_value=RSS):
                watch.update(root)
                watch.update(root)
            data = json.loads((root/'data/veille.json').read_text())
            self.assertEqual(len(data['items']), 1)
            html = page.read_text()
            self.assertIn('Fortinet &amp; FortiOS', html)
            self.assertTrue(html.startswith('Avant'))
            self.assertTrue(html.endswith('Apres'))
            self.assertIn('en attente', html)

    def test_failure_preserves_page(self):
        with tempfile.TemporaryDirectory() as d:
            root = Path(d)
            page = root / 'veille.html'
            page.write_text('Original')
            with patch.object(watch, 'download', side_effect=OSError('indisponible')):
                with self.assertRaises(OSError):
                    watch.update(root)
            self.assertEqual(page.read_text(), 'Original')
            self.assertFalse((root/'data/veille.json').exists())

if __name__ == '__main__':
    unittest.main()
