# is-duck-number
Implement `is_duck_number` in `is_duck_number.py`. Python 3.11+ standard library only.

Require n, an exact built-in int in [0,1000000000000000000] (0 to 10**18); negative numbers raise exact ValueError. Write n in decimal without leading zeros. Return the exact built-in bool True when n is positive and at least one of its digits is 0 (a duck number), otherwise False; 0 itself is False. So 10, 101, 1023 and 7000 are True, and 0, 7, 11 and 123456789 are False.

Reject bool and ALL subclasses of required builtins (including nested values) with exact TypeError. Reject other wrong types with exact TypeError. Validate ALL types before lengths/ranges, which raise exact ValueError. Exception messages are unconstrained. No input mutation, retained mutable state, I/O or dependencies.

Examples (argument lists -> result):
- `[0]` -> `False`
- `[1]` -> `False`
- `[7]` -> `False`
- `[9]` -> `False`
- `[10]` -> `True`
- `[11]` -> `False`
- `[20]` -> `True`
- `[99]` -> `False`
- `[101]` -> `True`
- `[110]` -> `True`
- `[111]` -> `False`
- `[123]` -> `False`
- `[1023]` -> `True`
- `[7000]` -> `True`
- `[1111]` -> `False`
- `[123456789]` -> `False`
- `[1000000001]` -> `True`
- `[987654321]` -> `False`
- `[True]` -> `raises TypeError`
- `[10.0]` -> `raises TypeError`
- `['10']` -> `raises TypeError`
- `[-10]` -> `raises ValueError`
- `[1000000000000000001]` -> `raises ValueError`

Only edit `is_duck_number.py` and optional IMPLEMENTATION.md in this task directory.
Run `python3 tasks/is-duck-number/check.py --solution "$PWD/tasks/is-duck-number/is_duck_number.py"`. The issue supplies the trusted checker pin. A pass remains CHECK_PASS_UNVERIFIED until independent source/scope review.
