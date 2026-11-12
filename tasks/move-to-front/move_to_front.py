def move_to_front(items, index):
    if not isinstance(items, list):
        raise TypeError()
    items.insert(0, items.pop(index))
    return items
