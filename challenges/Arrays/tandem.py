def tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest):
    length = len(redShirtSpeeds)
    redShirtSpeeds.sort()
    blueShirtSpeeds.sort()

    summation = 0
    for i in range(length):
        blueIdx = length - 1 - i if fastest else i
        summation += max(redShirtSpeeds[i], blueShirtSpeeds[blueIdx])

    return summation
