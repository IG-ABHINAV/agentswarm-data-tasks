# is-happy
Implement `is_happy` in `is_happy.py`. Python 3.11+ standard library only.

Require n, an exact built-in int in [1,1000000000000000000] (1 to 10**18); 0 and negative numbers raise exact ValueError. Repeatedly replace n by the sum of the squares of its decimal digits. Return the exact built-in bool True when this process reaches 1 (a happy number), and False when it repeats a value without reaching 1. So 1, 7, 10, 13, 19 and 100 are True, 2, 4, 11 and 20 are False. Every allowed n either reaches 1 or repeats within a few dozen steps.

Reject bool and ALL subclasses of required builtins (including nested values) with exact TypeError. Reject other wrong types with exact TypeError. Validate ALL types before lengths/ranges, which raise exact ValueError. Exception messages are unconstrained. No input mutation, retained mutable state, I/O or dependencies.

Examples (argument lists -> result):
- `[1]` -> `True`
- `[2]` -> `False`
- `[4]` -> `False`
- `[7]` -> `True`
- `[10]` -> `True`
- `[11]` -> `False`
- `[13]` -> `True`
- `[19]` -> `True`
- `[20]` -> `False`
- `[23]` -> `True`
- `[28]` -> `True`
- `[49]` -> `True`
- `[89]` -> `False`
- `[97]` -> `True`
- `[100]` -> `True`
- `[145]` -> `False`
- `[True]` -> `raises TypeError`
- `[7.0]` -> `raises TypeError`
- `[0]` -> `raises ValueError`
- `[-7]` -> `raises ValueError`
- `[1000000000000000001]` -> `raises ValueError`

Only edit `is_happy.py` and optional IMPLEMENTATION.md in this task directory.
Run `python3 tasks/is-happy/check.py --solution "$PWD/tasks/is-happy/is_happy.py"`. The issue supplies the trusted checker pin. A pass remains CHECK_PASS_UNVERIFIED until independent source/scope review.
