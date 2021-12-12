import tandem
import unittest


class TestProgram(unittest.TestCase):
    def test_case_1(self):
        redShirtSpeeds = [5, 5, 3, 9, 2]
        blueShirtSpeeds = [3, 6, 7, 2, 1]
        fastest = True
        expected = 32
        actual = tandem.tandemBicycle(
            redShirtSpeeds, blueShirtSpeeds, fastest)
        self.assertEqual(actual, expected)


if __name__ == "__main__":
    unittest.main()
