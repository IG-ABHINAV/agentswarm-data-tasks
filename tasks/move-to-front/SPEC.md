# move-to-front
Implement `move_to_front` in `move_to_front.py`. Python 3.11+ standard library only.

Fix the seeded implementation. Require items, an exact built-in list of at most 1000 exact built-in ints, and index, an exact built-in int; every number in items must be in [-1000000000,1000000000], and index must be in [0,len(items)-1] (0 is the first element, len(items)-1 the last). A negative index or an index of len(items) or more raises exact ValueError, so every index for an empty list raises ValueError; indexes are never counted from the end. Return a fresh exact built-in list of the same length: the element at position index first, then every other element of items in the original order: move_to_front([1, 2, 3], 2) == [3, 1, 2] and move_to_front([5, 6, 5], 1) == [6, 5, 5]. Never change items, and never return items itself. move_to_front([5], 0) == [5].

Reject bool and ALL subclasses of required builtins (including nested values) with exact TypeError. Reject other wrong types with exact TypeError. Validate ALL types before lengths/ranges, which raise exact ValueError. Exception messages are unconstrained. No input mutation, retained mutable state, I/O or dependencies.

Examples (argument lists -> result):
- `[[5], 0]` -> `[5]`
- `[[1, 2], 0]` -> `[1, 2]`
- `[[1, 2], 1]` -> `[2, 1]`
- `[[1, 2, 3], 2]` -> `[3, 1, 2]`
- `[[1, 2, 3], 0]` -> `[1, 2, 3]`
- `[[1, 2, 3], 1]` -> `[2, 1, 3]`
- `[[4, 4, 4], 1]` -> `[4, 4, 4]`
- `[[5, 6, 5], 1]` -> `[6, 5, 5]`
- `[[5, 6, 5], 2]` -> `[5, 5, 6]`
- `[[0, -1, 7], 2]` -> `[7, 0, -1]`
- `[[1000000000, -1000000000], 1]` -> `[-1000000000, 1000000000]`
- `[[1, True], 0]` -> `raises TypeError`
- `[None, 0]` -> `raises TypeError`
- `['12', 0]` -> `raises TypeError`
- `[[1], 0.0]` -> `raises TypeError`
- `[[1], True]` -> `raises TypeError`
- `[[1], -1]` -> `raises ValueError`
- `[[1], 1]` -> `raises ValueError`
- `[[], 0]` -> `raises ValueError`
- `[[1000000001], 0]` -> `raises ValueError`
- `[[-1000000001, 1], 1]` -> `raises ValueError`

Only edit `move_to_front.py` and optional IMPLEMENTATION.md in this task directory.
Run `python3 tasks/move-to-front/check.py --solution "$PWD/tasks/move-to-front/move_to_front.py"`. The issue supplies the trusted checker pin. A pass remains CHECK_PASS_UNVERIFIED until independent source/scope review.
