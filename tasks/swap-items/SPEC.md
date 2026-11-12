# swap-items
Implement `swap_items` in `swap_items.py`. Python 3.11+ standard library only.

Fix the seeded implementation. Require items, an exact built-in list of at most 1000 exact built-in ints, and i and j, exact built-in ints; every number in items must be in [-1000000000,1000000000], and i and j must each be in [0,len(items)-1] (0 is the first element, len(items)-1 the last). A negative index or an index of len(items) or more raises exact ValueError, so every call with an empty list raises ValueError; indexes are never counted from the end. Return a fresh exact built-in list of the same length: a copy of items with the elements at positions i and j exchanged (when i == j it is an unchanged copy): swap_items([1, 2, 3], 0, 2) == [3, 2, 1] and swap_items([4, 5], 1, 1) == [4, 5]. Never change items, and never return items itself. swap_items([7], 0, 0) == [7].

Reject bool and ALL subclasses of required builtins (including nested values) with exact TypeError. Reject other wrong types with exact TypeError. Validate ALL types before lengths/ranges, which raise exact ValueError. Exception messages are unconstrained. No input mutation, retained mutable state, I/O or dependencies.

Examples (argument lists -> result):
- `[[7], 0, 0]` -> `[7]`
- `[[1, 2], 0, 1]` -> `[2, 1]`
- `[[1, 2], 1, 0]` -> `[2, 1]`
- `[[1, 2, 3], 0, 2]` -> `[3, 2, 1]`
- `[[1, 2, 3], 2, 0]` -> `[3, 2, 1]`
- `[[1, 2, 3], 1, 2]` -> `[1, 3, 2]`
- `[[4, 5], 1, 1]` -> `[4, 5]`
- `[[4, 4, 4], 0, 2]` -> `[4, 4, 4]`
- `[[5, 6, 5], 0, 1]` -> `[6, 5, 5]`
- `[[0, -1, 7], 2, 1]` -> `[0, 7, -1]`
- `[[1000000000, -1000000000], 0, 1]` -> `[-1000000000, 1000000000]`
- `[[1, 2, 3, 4], 1, 3]` -> `[1, 4, 3, 2]`
- `[[1, True], 0, 1]` -> `raises TypeError`
- `[None, 0, 0]` -> `raises TypeError`
- `['12', 0, 1]` -> `raises TypeError`
- `[[1], 0.0, 0]` -> `raises TypeError`
- `[[1], 0, True]` -> `raises TypeError`
- `[[1], -1, 0]` -> `raises ValueError`
- `[[1], 0, 1]` -> `raises ValueError`
- `[[], 0, 0]` -> `raises ValueError`
- `[[1000000001], 0, 0]` -> `raises ValueError`
- `[[-1000000001, 1], 0, 1]` -> `raises ValueError`

Only edit `swap_items.py` and optional IMPLEMENTATION.md in this task directory.
Run `python3 tasks/swap-items/check.py --solution "$PWD/tasks/swap-items/swap_items.py"`. The issue supplies the trusted checker pin. A pass remains CHECK_PASS_UNVERIFIED until independent source/scope review.
