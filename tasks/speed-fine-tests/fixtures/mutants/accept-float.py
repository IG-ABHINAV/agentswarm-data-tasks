def speed_fine(over):
    if type(over) not in (int, float):
        raise TypeError('exact integer required')
    if over < 0 or over > 200:
        raise ValueError('over must be between 0 and 200')
    if over < 6:
        return 0
    if over < 21:
        return 50
    if over < 41:
        return 150
    return 400
