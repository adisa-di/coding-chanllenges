def findClosestValueInBst(tree, target):
    # Write your code here.
    # recursively traverse the tree
    return findClosestHelper(tree, target, float("inf"))


def findClosestHelper(tree, target, closest):
    if tree is None:
        return closest  # end condition

    if abs(target-closest) > abs(target-tree.value):
        closest = tree.value

    if tree.value-target == 0:
        return target

    if target < tree.value:
        return findClosestHelper(tree.left, target, closest)

    if target > tree.value:
        return findClosestHelper(tree.right, target, closest)

# This is the class of the input tree. Do not edit.


class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
