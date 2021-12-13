def factorial(n):

    ans = 1

    while n >= 1:
        ans *= n
        n -= 1

    return ans

def anagrams(words):
    hash = {}
    for word in words:
        letters = list(word)
        letters.sort()
        sorted = ''.join(letters)

        # get array in hash
        arr = None
        if sorted in hash:
            arr = hash[sorted]
        else:
            arr = []

        arr.append(word)
        hash[sorted] = arr

    result = []
    for key in hash:
        result.append(hash[key])

    hash1 = {}

    return result

    
