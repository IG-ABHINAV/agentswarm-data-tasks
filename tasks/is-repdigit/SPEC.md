# is-repdigit
Implement `is_repdigit` in `is_repdigit.py`. Python 3.11+ standard library only.

Require n, an exact built-in int in [0,1000000000000000000] (0 to 10**18); negative numbers raise exact ValueError. Write n in decimal without leading zeros. Return the exact built-in bool True when every digit of n is the same digit (a repdigit), otherwise False. So every single-digit number 0 to 9 is True, 11, 222 and 7777 are True, and 10, 12, 101 and 1211 are False.

Reject bool and ALL subclasses of required builtins (including nested values) with exact TypeError. Reject other wrong types with exact TypeError. Validate ALL types before lengths/ranges, which raise exact ValueError. Exception messages are unconstrained. No input mutation, retained mutable state, I/O or dependencies.

Examples (argument lists -> result):
- `[0]` -> `True`
- `[1]` -> `True`
- `[5]` -> `True`
- `[9]` -> `True`
- `[10]` -> `False`
- `[11]` -> `True`
- `[12]` -> `False`
- `[22]` -> `True`
- `[101]` -> `False`
- `[110]` -> `False`
- `[112]` -> `False`
- `[121]` -> `False`
- `[222]` -> `True`
- `[1121]` -> `False`
- `[1211]` -> `False`
- `[7777]` -> `True`
- `[99999]` -> `True`
- `[12345]` -> `False`
- `[100000]` -> `False`
- `[333333333]` -> `True`
- `[True]` -> `raises TypeError`
- `[11.0]` -> `raises TypeError`
- `['11']` -> `raises TypeError`
- `[-1]` -> `raises ValueError`
- `[1000000000000000001]` -> `raises ValueError`

Only edit `is_repdigit.py` and optional IMPLEMENTATION.md in this task directory.
Run `python3 tasks/is-repdigit/check.py --solution "$PWD/tasks/is-repdigit/is_repdigit.py"`. The issue supplies the trusted checker pin. A pass remains CHECK_PASS_UNVERIFIED until independent source/scope review.
