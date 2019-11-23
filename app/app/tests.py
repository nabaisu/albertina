from django.test import TestCase
from app.calc import add, subtract


class CalcTests(TestCase):
    def test_add_numbers(self):
        # test that 2 numbers are added together
        self.assertEqual(add(3, 8), 11)


    def test_subtract_numbers(self):
        # test to subtract 2 numbers
        self.assertEqual(subtract(3, 8), 5)
