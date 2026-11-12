def replace_value(items, old, new):
    if not isinstance(items, list):
        raise TypeError()
    if old in items:
        items[items.index(old)] = new
    return items
