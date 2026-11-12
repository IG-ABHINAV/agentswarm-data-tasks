def insert_at(items, index, value):
    if not isinstance(items, list):
        raise TypeError()
    items.insert(index, value)
    return items
