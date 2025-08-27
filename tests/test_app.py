import unittest
from app import app

class TestApp(unittest.TestCase):
    def setUp(self):
        self.app = app.test_client()
        self.app.testing = True

    def test_index_route(self):
        response = self.app.get('/')
        self.assertEqual(response.status_code, 200)
        text = response.get_data(as_text=True)
        self.assertIn('ポモドーロタイマー', text)
        self.assertIn('開始', text)
        self.assertIn('リセット', text)

if __name__ == '__main__':
    unittest.main()
