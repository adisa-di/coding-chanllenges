def tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest):
    length = len(redShirtSpeeds)
    redShirtSpeeds.sort()
    blueShirtSpeeds.sort()

    summation = 0
    for i in range(length):
        blueIdx = length - 1 - i if fastest else i
        summation += max(redShirtSpeeds[i], blueShirtSpeeds[blueIdx])

    return summation


def tandemBicycle2(redShirtSpeeds, blueShirtSpeeds, fastest):
    length = len(redShirtSpeeds)
    redShirtSpeeds.sort()
    blueShirtSpeeds.sort()

    if fastest:
        blueShirtSpeeds.reverse()

    summation = 0
    for i in range(length):
        summation += max(redShirtSpeeds[i], blueShirtSpeeds[i])

    return summation
