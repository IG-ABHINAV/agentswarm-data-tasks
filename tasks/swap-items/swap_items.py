def swap_items(items, i, j):
    if not isinstance(items, list):
        raise TypeError()
    items[i], items[j] = items[j], items[i]
    return items
