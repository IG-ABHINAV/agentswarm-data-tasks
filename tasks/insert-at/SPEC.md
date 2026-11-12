# insert-at
Implement `insert_at` in `insert_at.py`. Python 3.11+ standard library only.

Fix the seeded implementation. Require items, an exact built-in list of at most 1000 exact built-in ints, index, an exact built-in int, and value, an exact built-in int; every number in items and value must be in [-1000000000,1000000000], and index must be in [0,len(items)] (0 inserts at the front, len(items) appends at the end). A negative index or an index greater than len(items) raises exact ValueError; it is never counted from the end or clamped. Return a fresh exact built-in list of length len(items) + 1 holding the elements of items before position index, then value, then the remaining elements, in their original order: insert_at([1, 2, 3], 1, 9) == [1, 9, 2, 3]. Never change items, and never return items itself. insert_at([], 0, 5) == [5].

Reject bool and ALL subclasses of required builtins (including nested values) with exact TypeError. Reject other wrong types with exact TypeError. Validate ALL types before lengths/ranges, which raise exact ValueError. Exception messages are unconstrained. No input mutation, retained mutable state, I/O or dependencies.

Examples (argument lists -> result):
- `[[], 0, 5]` -> `[5]`
- `[[1], 0, 9]` -> `[9, 1]`
- `[[1], 1, 9]` -> `[1, 9]`
- `[[1, 2, 3], 1, 9]` -> `[1, 9, 2, 3]`
- `[[1, 2, 3], 0, 0]` -> `[0, 1, 2, 3]`
- `[[1, 2, 3], 3, 4]` -> `[1, 2, 3, 4]`
- `[[1, 2, 3], 2, 2]` -> `[1, 2, 2, 3]`
- `[[5, 5], 1, 5]` -> `[5, 5, 5]`
- `[[0, -1], 1, -7]` -> `[0, -7, -1]`
- `[[7, 8, 9, 10], 4, -1000000000]` -> `[7, 8, 9, 10, -1000000000]`
- `[[1, True], 0, 1]` -> `raises TypeError`
- `[None, 0, 1]` -> `raises TypeError`
- `['12', 0, 1]` -> `raises TypeError`
- `[[1], 0.0, 1]` -> `raises TypeError`
- `[[1], 0, 1.0]` -> `raises TypeError`
- `[[1], True, 1]` -> `raises TypeError`
- `[[1], -1, 9]` -> `raises ValueError`
- `[[1], 2, 9]` -> `raises ValueError`
- `[[], 1, 9]` -> `raises ValueError`
- `[[1], 0, 1000000001]` -> `raises ValueError`
- `[[-1000000001], 0, 0]` -> `raises ValueError`

Only edit `insert_at.py` and optional IMPLEMENTATION.md in this task directory.
Run `python3 tasks/insert-at/check.py --solution "$PWD/tasks/insert-at/insert_at.py"`. The issue supplies the trusted checker pin. A pass remains CHECK_PASS_UNVERIFIED until independent source/scope review.
