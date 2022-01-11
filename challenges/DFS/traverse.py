def helper(w, h, mem):

    if h < 0 or w < 0:
        return 0

    if mem[h][w] != -1:
        return mem[h][w]

    mem[h][w] = helper(w - 1, h, mem) + helper(w, h - 1, mem)

    return mem[h][w]

# space O(rows * height)


def numberOfWaysToTraverseGraph(width, height):
    table = []
    for n in range(0, height):
        table.append([-1] * width)

    table[0][0] = 0

    if width > 1:
        table[0][1] = 1

    if height > 1:
        table[1][0] = 1

    return helper(width-1, height-1, table)
