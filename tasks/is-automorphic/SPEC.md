# is-automorphic
Implement `is_automorphic` in `is_automorphic.py`. Python 3.11+ standard library only.

Require n, an exact built-in int in [0,1000000000000000] (0 to 10**15); negative numbers raise exact ValueError. Let k be the number of decimal digits of n (written without leading zeros; 0 has one digit). Return the exact built-in bool True when the last k decimal digits of n * n are exactly n (n * n ends with n), otherwise False. So 0, 1, 5, 6, 25, 76, 376 and 625 are True; 4 (16), 9 (81), 24 and 10 are False. Use exact integer arithmetic.

Reject bool and ALL subclasses of required builtins (including nested values) with exact TypeError. Reject other wrong types with exact TypeError. Validate ALL types before lengths/ranges, which raise exact ValueError. Exception messages are unconstrained. No input mutation, retained mutable state, I/O or dependencies.

Examples (argument lists -> result):
- `[0]` -> `True`
- `[1]` -> `True`
- `[2]` -> `False`
- `[4]` -> `False`
- `[5]` -> `True`
- `[6]` -> `True`
- `[9]` -> `False`
- `[10]` -> `False`
- `[24]` -> `False`
- `[25]` -> `True`
- `[49]` -> `False`
- `[76]` -> `True`
- `[99]` -> `False`
- `[376]` -> `True`
- `[625]` -> `True`
- `[9376]` -> `True`
- `[True]` -> `raises TypeError`
- `[25.0]` -> `raises TypeError`
- `['25']` -> `raises TypeError`
- `[-1]` -> `raises ValueError`
- `[1000000000000001]` -> `raises ValueError`

Only edit `is_automorphic.py` and optional IMPLEMENTATION.md in this task directory.
Run `python3 tasks/is-automorphic/check.py --solution "$PWD/tasks/is-automorphic/is_automorphic.py"`. The issue supplies the trusted checker pin. A pass remains CHECK_PASS_UNVERIFIED until independent source/scope review.
