def water_bill(units):
    if type(units) not in (int, float):
        raise TypeError('exact integer required')
    if units < 0 or units > 1000:
        raise ValueError('units must be between 0 and 1000')
    if units <= 10:
        return 5 + 2 * units
    return 25 + 3 * (units - 10)
