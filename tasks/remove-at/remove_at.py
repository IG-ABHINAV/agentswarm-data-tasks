def remove_at(items, index):
    if not isinstance(items, list):
        raise TypeError()
    items.pop(index)
    return items
