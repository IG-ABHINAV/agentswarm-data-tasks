def rental_fee(hours):
    if type(hours) is not int:
        raise TypeError('exact integer required')
    if hours < 1 or hours > 72:
        raise ValueError('hours must be between 1 and 72')
    if hours <= 3:
        return 5 * hours
    return min(12 + 2 * (hours - 3), 30)
