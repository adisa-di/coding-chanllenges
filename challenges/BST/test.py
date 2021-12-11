from unittest import result
import program
import unittest
import findSum


class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


class TestProgram(unittest.TestCase):
    def test_case_1(self):
        root = BST(10)
        root.left = BST(5)
        root.left.left = BST(2)
        root.left.left.left = BST(1)
        root.left.right = BST(5)
        root.right = BST(15)
        root.right.left = BST(13)
        root.right.left.right = BST(14)
        root.right.right = BST(22)
        expected = 13
        actual = program.findClosestValueInBst(root, 12)
        self.assertEqual(expected, actual)

    def test_case_2(self):
        root = BST(10)
        root.left = BST(5)
        root.left.left = BST(2)
        root.left.left.left = BST(1)
        root.left.right = BST(5)
        root.right = BST(15)
        root.right.left = BST(13)
        root.right.left.right = BST(14)
        root.right.right = BST(22)
        res = findSum.branchSums(root)

        expected = [18, 20, 52, 47]
        self.assertEqual(expected, res)

    def test_case_3(self):
        root = BST(10)  # 0
        root.left = BST(5)  # 1
        root.left.left = BST(2)  # 2
        root.left.left.left = BST(1)  # 3
        root.left.right = BST(5)  # 2
        root.right = BST(15)  # 1
        root.right.left = BST(13)  # 2
        root.right.left.right = BST(14)  # 3
        root.right.right = BST(22)  # 2

        res = findSum.nodeDepths(root)

        self.assertEqual(16, res)


if __name__ == '__main__':
    unittest.main()
