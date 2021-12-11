# This is the class of the input root. Do not edit it.
class BinaryTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


def branchSums(root):
    # Write your code here.
    out = []
    branchSumHelper(root, out, 0)
    return out


def branchSumHelper(root, array, currSum):
    # where do we want to do the processing?
    # right when we get to the node

    if root is None:
        return

    # go down the tree and add
    currSum += root.value

    if root.left is None and root.right is None:
        array.append(currSum)
        return

    # go left
    branchSumHelper(root.left, array, currSum)
    branchSumHelper(root.right, array, currSum)


def nodeDepths(root):
    return nodeHelper(root)


def nodeHelper(root, depth=0):
    if (root is None):
        return 0
    return depth + nodeHelper(root.left, depth + 1) + nodeHelper(root.right, depth + 1)


def nodeDepthsIterative(root):
    sumOfDepths = 0
    stack = [{"node": root, "depth": 0}]
    while len(stack) > 0:
        nodeInfo = stack.pop()
        node, depth = nodeInfo["node"], nodeInfo["depth"]
        if node is None:
            continue

        sumOfDepths += depth
        stack.append({"node": node.left, "depth": depth + 1})
        stack.append({"node": node.right, "depth": depth + 1})

    return sumOfDepths
