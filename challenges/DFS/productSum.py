# Tip: You can use the type(element) function to check whether an item
# is a list or an integer.
def productSum(array):
    # Write your code here.
    return productSumHelper(array, 1)


def productSumHelper(array, depth):
    total = 0
    for ele in array:
        innerSum = 0
        if type(ele) == list:
            total += productSumHelper(ele, depth + 1)
        else:
            total += ele

    return total * depth
