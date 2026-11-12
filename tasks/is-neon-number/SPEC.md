# is-neon-number
Implement `is_neon_number` in `is_neon_number.py`. Python 3.11+ standard library only.

Require n, an exact built-in int in [0,1000000000000000000] (0 to 10**18); negative numbers raise exact ValueError. Square n (n * n), write the square in decimal without leading zeros and add up its digits. Return the exact built-in bool True when that digit sum equals n (a neon number), otherwise False. So is_neon_number(0) is True (0 * 0 = 0), is_neon_number(1) is True, is_neon_number(9) is True (81 and 8 + 1 = 9), and is_neon_number(2), is_neon_number(3), is_neon_number(10), is_neon_number(45) and is_neon_number(100) are False.

Reject bool and ALL subclasses of required builtins (including nested values) with exact TypeError. Reject other wrong types with exact TypeError. Validate ALL types before lengths/ranges, which raise exact ValueError. Exception messages are unconstrained. No input mutation, retained mutable state, I/O or dependencies.

Examples (argument lists -> result):
- `[0]` -> `True`
- `[1]` -> `True`
- `[2]` -> `False`
- `[3]` -> `False`
- `[8]` -> `False`
- `[9]` -> `True`
- `[10]` -> `False`
- `[11]` -> `False`
- `[18]` -> `False`
- `[45]` -> `False`
- `[81]` -> `False`
- `[90]` -> `False`
- `[99]` -> `False`
- `[100]` -> `False`
- `[1000]` -> `False`
- `[123456789]` -> `False`
- `[True]` -> `raises TypeError`
- `[9.0]` -> `raises TypeError`
- `['9']` -> `raises TypeError`
- `[-9]` -> `raises ValueError`
- `[1000000000000000001]` -> `raises ValueError`

Only edit `is_neon_number.py` and optional IMPLEMENTATION.md in this task directory.
Run `python3 tasks/is-neon-number/check.py --solution "$PWD/tasks/is-neon-number/is_neon_number.py"`. The issue supplies the trusted checker pin. A pass remains CHECK_PASS_UNVERIFIED until independent source/scope review.
