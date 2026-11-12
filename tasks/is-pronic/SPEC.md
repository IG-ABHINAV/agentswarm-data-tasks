# is-pronic
Implement `is_pronic` in `is_pronic.py`. Python 3.11+ standard library only.

Require n, an exact built-in int in [0,1000000000000000000] (0 to 10**18); negative numbers raise exact ValueError. Return the exact built-in bool True when n is a pronic number, meaning n == k * (k + 1) for some integer k >= 0, otherwise False. So 0 (0 * 1), 2, 6, 12, 20 and 30 are True; 1, 3, 4, 9 and 10 are False. Use exact integer arithmetic (for example math.isqrt); floating-point square roots are not exact for large n.

Reject bool and ALL subclasses of required builtins (including nested values) with exact TypeError. Reject other wrong types with exact TypeError. Validate ALL types before lengths/ranges, which raise exact ValueError. Exception messages are unconstrained. No input mutation, retained mutable state, I/O or dependencies.

Examples (argument lists -> result):
- `[0]` -> `True`
- `[1]` -> `False`
- `[2]` -> `True`
- `[3]` -> `False`
- `[4]` -> `False`
- `[6]` -> `True`
- `[9]` -> `False`
- `[10]` -> `False`
- `[12]` -> `True`
- `[20]` -> `True`
- `[30]` -> `True`
- `[42]` -> `True`
- `[56]` -> `True`
- `[72]` -> `True`
- `[90]` -> `True`
- `[99]` -> `False`
- `[110]` -> `True`
- `[132]` -> `True`
- `[True]` -> `raises TypeError`
- `[6.0]` -> `raises TypeError`
- `['6']` -> `raises TypeError`
- `[-1]` -> `raises ValueError`
- `[1000000000000000001]` -> `raises ValueError`

Only edit `is_pronic.py` and optional IMPLEMENTATION.md in this task directory.
Run `python3 tasks/is-pronic/check.py --solution "$PWD/tasks/is-pronic/is_pronic.py"`. The issue supplies the trusted checker pin. A pass remains CHECK_PASS_UNVERIFIED until independent source/scope review.
