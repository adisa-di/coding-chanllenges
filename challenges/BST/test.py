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

    def getTree(self):
        root = BST(10)
        root.left = BST(5)
        root.left.left = BST(2)
        root.left.left.left = BST(1)
        root.left.right = BST(5)
        root.right = BST(15)
        root.right.left = BST(13)
        root.right.left.right = BST(14)
        root.right.right = BST(22)

        return root

    def test_case_1(self):
        root = self.getTree()
        expected = 13
        actual = program.findClosestValueInBst(root, 12)
        self.assertEqual(expected, actual)

    def test_case_2(self):
        root = self.getTree()
        res = findSum.branchSums(root)

        expected = [18, 20, 52, 47]
        self.assertEqual(expected, res)

    def test_case_3(self):
        root = self.getTree()
        res = findSum.nodeDepths(root)
        resIt = findSum.nodeDepths(root)

        self.assertEqual(16, res)
        self.assertEqual(16, resIt)


if __name__ == '__main__':
    unittest.main()
