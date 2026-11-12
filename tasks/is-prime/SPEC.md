# is-prime
Implement `is_prime` in `is_prime.py`. Python 3.11+ standard library only.

Require n, an exact built-in int in [0,1000000000000] (0 to 10**12); negative numbers raise exact ValueError. Return the exact built-in bool True when n is a prime number (an integer greater than 1 whose only positive divisors are 1 and itself), otherwise False. So 0 and 1 are False, 2, 3, 5 and 7 are True, 4, 9 and 25 are False. Use exact integer arithmetic; trial division up to the integer square root of n is fast enough for every allowed n (well under a second per call).

Reject bool and ALL subclasses of required builtins (including nested values) with exact TypeError. Reject other wrong types with exact TypeError. Validate ALL types before lengths/ranges, which raise exact ValueError. Exception messages are unconstrained. No input mutation, retained mutable state, I/O or dependencies.

Examples (argument lists -> result):
- `[0]` -> `False`
- `[1]` -> `False`
- `[2]` -> `True`
- `[3]` -> `True`
- `[4]` -> `False`
- `[5]` -> `True`
- `[7]` -> `True`
- `[9]` -> `False`
- `[11]` -> `True`
- `[15]` -> `False`
- `[25]` -> `False`
- `[49]` -> `False`
- `[97]` -> `True`
- `[100]` -> `False`
- `[7919]` -> `True`
- `[7921]` -> `False`
- `[True]` -> `raises TypeError`
- `[7.0]` -> `raises TypeError`
- `['7']` -> `raises TypeError`
- `[-1]` -> `raises ValueError`
- `[1000000000001]` -> `raises ValueError`

Only edit `is_prime.py` and optional IMPLEMENTATION.md in this task directory.
Run `python3 tasks/is-prime/check.py --solution "$PWD/tasks/is-prime/is_prime.py"`. The issue supplies the trusted checker pin. A pass remains CHECK_PASS_UNVERIFIED until independent source/scope review.
