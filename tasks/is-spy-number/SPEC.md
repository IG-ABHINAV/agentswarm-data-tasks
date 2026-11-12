# is-spy-number
Implement `is_spy_number` in `is_spy_number.py`. Python 3.11+ standard library only.

Require n, an exact built-in int in [0,1000000000000000000] (0 to 10**18); negative numbers raise exact ValueError. Write n in decimal without leading zeros. Return the exact built-in bool True when the sum of its digits equals the product of its digits (a spy number), otherwise False. A zero digit makes the product 0. So every single-digit number 0 to 9 is True, 22, 123 and 1124 are True, and 10, 12, 101 and 1234 are False.

Reject bool and ALL subclasses of required builtins (including nested values) with exact TypeError. Reject other wrong types with exact TypeError. Validate ALL types before lengths/ranges, which raise exact ValueError. Exception messages are unconstrained. No input mutation, retained mutable state, I/O or dependencies.

Examples (argument lists -> result):
- `[0]` -> `True`
- `[1]` -> `True`
- `[5]` -> `True`
- `[9]` -> `True`
- `[10]` -> `False`
- `[11]` -> `False`
- `[12]` -> `False`
- `[22]` -> `True`
- `[101]` -> `False`
- `[112]` -> `False`
- `[123]` -> `True`
- `[132]` -> `True`
- `[213]` -> `True`
- `[321]` -> `True`
- `[1124]` -> `True`
- `[1142]` -> `True`
- `[1412]` -> `True`
- `[4211]` -> `True`
- `[1234]` -> `False`
- `[1111]` -> `False`
- `[111111111]` -> `False`
- `[12345]` -> `False`
- `[22222]` -> `False`
- `[True]` -> `raises TypeError`
- `[22.0]` -> `raises TypeError`
- `['22']` -> `raises TypeError`
- `[-22]` -> `raises ValueError`
- `[1000000000000000001]` -> `raises ValueError`

Only edit `is_spy_number.py` and optional IMPLEMENTATION.md in this task directory.
Run `python3 tasks/is-spy-number/check.py --solution "$PWD/tasks/is-spy-number/is_spy_number.py"`. The issue supplies the trusted checker pin. A pass remains CHECK_PASS_UNVERIFIED until independent source/scope review.
