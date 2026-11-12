# is-tidy-number
Implement `is_tidy_number` in `is_tidy_number.py`. Python 3.11+ standard library only.

Require n, an exact built-in int in [0,1000000000000000000] (0 to 10**18); negative numbers raise exact ValueError. Write n in decimal without leading zeros. Return the exact built-in bool True when its digits never decrease from left to right (each digit is equal to or larger than the one before it; a tidy number), otherwise False. Every single-digit number, including 0, is True. So 0, 7, 11, 123, 1123 and 5559 are True, and 10, 21, 1000, 1231 and 987 are False.

Reject bool and ALL subclasses of required builtins (including nested values) with exact TypeError. Reject other wrong types with exact TypeError. Validate ALL types before lengths/ranges, which raise exact ValueError. Exception messages are unconstrained. No input mutation, retained mutable state, I/O or dependencies.

Examples (argument lists -> result):
- `[0]` -> `True`
- `[1]` -> `True`
- `[7]` -> `True`
- `[9]` -> `True`
- `[10]` -> `False`
- `[11]` -> `True`
- `[12]` -> `True`
- `[21]` -> `False`
- `[99]` -> `True`
- `[100]` -> `False`
- `[123]` -> `True`
- `[987]` -> `False`
- `[1000]` -> `False`
- `[1123]` -> `True`
- `[1231]` -> `False`
- `[5559]` -> `True`
- `[111111111]` -> `True`
- `[123456789]` -> `True`
- `[1234567890]` -> `False`
- `[112233445]` -> `True`
- `[True]` -> `raises TypeError`
- `[12.0]` -> `raises TypeError`
- `['12']` -> `raises TypeError`
- `[-12]` -> `raises ValueError`
- `[1000000000000000001]` -> `raises ValueError`

Only edit `is_tidy_number.py` and optional IMPLEMENTATION.md in this task directory.
Run `python3 tasks/is-tidy-number/check.py --solution "$PWD/tasks/is-tidy-number/is_tidy_number.py"`. The issue supplies the trusted checker pin. A pass remains CHECK_PASS_UNVERIFIED until independent source/scope review.
