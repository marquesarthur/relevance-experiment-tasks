import unittest
from code.nytimes import Solution


class TestNYTimes(unittest.TestCase):

    def test_articles_from_2021_11_01(self):
        url = "https://www.nytimes.com/issue/todayspaper/2021/11/01/todays-new-york-times"
        web_scrapper = Solution()
        articles = web_scrapper.get_articles_from_front_page(url)

        expected = "Angling for a Merry ‘Fishmas’ Despite Global Shipping Delays"
        self.assertTrue(expected in articles)

        expected = "Who Had Covid-19 Vaccine Breakthrough Cases?"
        self.assertTrue(expected in articles)

        expected = "What if Everything You Learned About Human History Is Wrong?"
        self.assertTrue(expected in articles)

    def test_articles_from_2021_10_01(self):
        url = "https://www.nytimes.com/issue/todayspaper/2021/10/01/todays-new-york-times"
        web_scrapper = Solution()
        articles = web_scrapper.get_articles_from_front_page(url)

        expected = "Leader of Prestigious Yale Program Resigns, Citing Donor Pressure"
        self.assertTrue(expected in articles)

        expected = "After Hurricane Ida, Oil Infrastructure Springs Dozens of Leaks"
        self.assertTrue(expected in articles)
