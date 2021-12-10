class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


def iterateBST(tree, target):
    return iterateBSTHelper(tree, set(), target)


# in order traversal of binary tree
def iterateBSTHelper(tree, set, target):
    if tree is None:
        return

    # check if the set contains the pair we're looking for

    # go left first
    if (tree.left is not None):
        iterateBSTHelper(tree.left, set, target)

    # otherwise go right
    if (tree.right is not None):
        iterateBSTHelper(tree.right, set, target)
