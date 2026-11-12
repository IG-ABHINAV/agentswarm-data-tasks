def parking_fee(minutes):
    if type(minutes) is not int:
        raise TypeError('exact integer required')
    if minutes < 0 or minutes > 1440:
        raise ValueError('minutes must be between 0 and 1440')
    if minutes < 16:
        return 0
    if minutes < 62:
        return 4
    if minutes < 181:
        return 10
    return 25
