def insert_at(items, index, value):
    """Return a new list with value inserted at position index.

    Validates exact built-in types first (bool and subclasses raise
    TypeError), then lengths and ranges (ValueError). Never mutates
    items and never returns items itself.
    """
    if type(items) is not list:
        raise TypeError("items must be an exact built-in list")

    for element in items:
        if type(element) is not int:
            raise TypeError("items must contain exact built-in ints")

    if type(index) is not int:
        raise TypeError("index must be an exact built-in int")

    if type(value) is not int:
        raise TypeError("value must be an exact built-in int")

    if len(items) > 1000:
        raise ValueError("items must have at most 1000 elements")

    for element in items:
        if element < -10**9 or element > 10**9:
            raise ValueError("items numbers must be in [-10**9, 10**9]")

    if value < -10**9 or value > 10**9:
        raise ValueError("value must be in [-10**9, 10**9]")

    if index < 0 or index > len(items):
        raise ValueError("index must be in [0, len(items)]")

    return items[:index] + [value] + items[index:]
