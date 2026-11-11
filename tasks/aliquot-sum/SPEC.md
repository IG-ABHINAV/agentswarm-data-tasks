# aliquot-sum
Implement `aliquot_sum` in `aliquot_sum.py`. Python 3.11+ standard library only.

Require n, an exact built-in int in [1,1000000000000] (1 to 10**12); 0 and negative numbers raise exact ValueError. Return, as an exact built-in int, the sum of the proper divisors of n: every positive divisor of n except n itself. aliquot_sum(1) is 0, aliquot_sum(6) is 1 + 2 + 3 = 6, aliquot_sum(12) is 16 and a prime p gives 1. Count a square root divisor once (aliquot_sum(9) is 1 + 3 = 4). Use exact integer arithmetic; trial division up to the integer square root of n is fast enough (well under a second per call).

Reject bool and ALL subclasses of required builtins (including nested values) with exact TypeError. Reject other wrong types with exact TypeError. Validate ALL types before lengths/ranges, which raise exact ValueError. Exception messages are unconstrained. No input mutation, retained mutable state, I/O or dependencies.

Examples (argument lists -> result):
- `[1]` -> `0`
- `[2]` -> `1`
- `[3]` -> `1`
- `[4]` -> `3`
- `[6]` -> `6`
- `[8]` -> `7`
- `[9]` -> `4`
- `[12]` -> `16`
- `[16]` -> `15`
- `[25]` -> `6`
- `[28]` -> `28`
- `[97]` -> `1`
- `[100]` -> `117`
- `[220]` -> `284`
- `[284]` -> `220`
- `[496]` -> `496`
- `[True]` -> `raises TypeError`
- `[6.0]` -> `raises TypeError`
- `[0]` -> `raises ValueError`
- `[-6]` -> `raises ValueError`
- `[1000000000001]` -> `raises ValueError`

Only edit `aliquot_sum.py` and optional IMPLEMENTATION.md in this task directory.
Run `python3 tasks/aliquot-sum/check.py --solution "$PWD/tasks/aliquot-sum/aliquot_sum.py"`. The issue supplies the trusted checker pin. A pass remains CHECK_PASS_UNVERIFIED until independent source/scope review.
