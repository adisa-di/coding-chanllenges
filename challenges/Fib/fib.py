def getNthFib(n):
    mem = {1: 0, 2: 1}
    return helper(n, mem)


def helper(n, mem):
    if n in mem:
        return mem[n]
    else:
        mem[n] = helper(n-1, mem) + helper(n-2, mem)
        return mem[n]
