# replace-value
Implement `replace_value` in `replace_value.py`. Python 3.11+ standard library only.

Fix the seeded implementation. Require items, an exact built-in list of at most 1000 exact built-in ints, and old and new, exact built-in ints; every number (including old and new) must be in [-1000000000,1000000000]. Return a fresh exact built-in list of the same length as items where every element equal to old is replaced by new and every other element is kept, in their original order. Replace every match, not only the first: replace_value([1, 2, 1], 1, 9) == [9, 2, 9]. Never change items, and never return items itself, also when nothing is replaced (replace_value(items, old, new) must be a new list even if old does not occur or old equals new). [] returns [].

Reject bool and ALL subclasses of required builtins (including nested values) with exact TypeError. Reject other wrong types with exact TypeError. Validate ALL types before lengths/ranges, which raise exact ValueError. Exception messages are unconstrained. No input mutation, retained mutable state, I/O or dependencies.

Examples (argument lists -> result):
- `[[], 1, 2]` -> `[]`
- `[[1], 1, 9]` -> `[9]`
- `[[1], 2, 9]` -> `[1]`
- `[[1, 2, 1], 1, 9]` -> `[9, 2, 9]`
- `[[1, 1, 1], 1, 0]` -> `[0, 0, 0]`
- `[[3, 1, 2], 5, 7]` -> `[3, 1, 2]`
- `[[0, -1, 0, -1], -1, 4]` -> `[0, 4, 0, 4]`
- `[[5, 4, 5], 5, 5]` -> `[5, 4, 5]`
- `[[1, 2, 3], 2, -2]` -> `[1, -2, 3]`
- `[[7, 8], 8, 7]` -> `[7, 7]`
- `[[1, True], 1, 2]` -> `raises TypeError`
- `[None, 1, 2]` -> `raises TypeError`
- `['12', 1, 2]` -> `raises TypeError`
- `[[1], 1.0, 2]` -> `raises TypeError`
- `[[1], 1, 2.0]` -> `raises TypeError`
- `[[1], 1000000001, 0]` -> `raises ValueError`
- `[[1], 1, -1000000001]` -> `raises ValueError`
- `[[-1000000001], 0, 0]` -> `raises ValueError`

Only edit `replace_value.py` and optional IMPLEMENTATION.md in this task directory.
Run `python3 tasks/replace-value/check.py --solution "$PWD/tasks/replace-value/replace_value.py"`. The issue supplies the trusted checker pin. A pass remains CHECK_PASS_UNVERIFIED until independent source/scope review.
