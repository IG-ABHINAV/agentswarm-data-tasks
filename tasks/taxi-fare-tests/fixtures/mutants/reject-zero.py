def taxi_fare(km):
    if type(km) is not int:
        raise TypeError('exact integer required')
    if km < 1 or km > 500:
        raise ValueError('km must be between 0 and 500')
    if km <= 5:
        return 4 + 3 * km
    return 19 + 2 * (km - 5)
