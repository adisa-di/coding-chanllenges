import unittest
import fac


class TestProgram(unittest.TestCase):
    def test_case_1(self):
        res = fac.factorial(6)
        self.assertEqual(res, 720)

        res2 = fac.factorial(0)
        self.assertEqual(res2, 1)


if __name__ == "__main__":
    unittest.main()
