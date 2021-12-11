class Node:
    def __init__(self, name):
        self.children = []
        self.name = name

    def addChild(self, name):
        self.children.append(Node(name))
        return self

    def depthFirst(self, array):

        # append child to array
        array.append(self.name)

        i = 0
        while i <= len(self.children) - 1:
            self.children[i].depthFirst(array)
            i += 1
        return array
