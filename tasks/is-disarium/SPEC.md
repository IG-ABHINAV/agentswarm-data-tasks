# is-disarium
Implement `is_disarium` in `is_disarium.py`. Python 3.11+ standard library only.

Require n, an exact built-in int in [0,1000000000000000000] (0 to 10**18); negative numbers raise exact ValueError. Write n in decimal without leading zeros and number its digits 1, 2, 3, ... from the left. Return the exact built-in bool True when the sum of each digit raised to the power of its position equals n (a disarium number), otherwise False. So 0 to 9 are True, 89 (8**1 + 9**2), 135, 175, 518, 598, 1306, 1676, 2427 and 2646798 are True, and 10, 88, 100, 153 and 1305 are False.

Reject bool and ALL subclasses of required builtins (including nested values) with exact TypeError. Reject other wrong types with exact TypeError. Validate ALL types before lengths/ranges, which raise exact ValueError. Exception messages are unconstrained. No input mutation, retained mutable state, I/O or dependencies.

Examples (argument lists -> result):
- `[0]` -> `True`
- `[1]` -> `True`
- `[5]` -> `True`
- `[9]` -> `True`
- `[10]` -> `False`
- `[11]` -> `False`
- `[88]` -> `False`
- `[89]` -> `True`
- `[100]` -> `False`
- `[135]` -> `True`
- `[153]` -> `False`
- `[175]` -> `True`
- `[370]` -> `False`
- `[518]` -> `True`
- `[598]` -> `True`
- `[1305]` -> `False`
- `[1306]` -> `True`
- `[1307]` -> `False`
- `[1676]` -> `True`
- `[2427]` -> `True`
- `[2646798]` -> `True`
- `[2646799]` -> `False`
- `[True]` -> `raises TypeError`
- `[89.0]` -> `raises TypeError`
- `['89']` -> `raises TypeError`
- `[-89]` -> `raises ValueError`
- `[1000000000000000001]` -> `raises ValueError`

Only edit `is_disarium.py` and optional IMPLEMENTATION.md in this task directory.
Run `python3 tasks/is-disarium/check.py --solution "$PWD/tasks/is-disarium/is_disarium.py"`. The issue supplies the trusted checker pin. A pass remains CHECK_PASS_UNVERIFIED until independent source/scope review.
