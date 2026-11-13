# digit-square-sum
Implement `digit_square_sum` in `digit_square_sum.py`. Python 3.11+ standard library only.

Require n, an exact built-in int in [0,1000000000000000000] (0 to 10**18); negative numbers raise exact ValueError. Write n in decimal without leading zeros and return, as an exact built-in int, the sum of the squares of its digits. So digit_square_sum(0) is 0, digit_square_sum(7) is 49, digit_square_sum(10) is 1, digit_square_sum(12) is 5 (1 + 4), digit_square_sum(123) is 14 and digit_square_sum(99) is 162.

Reject bool and ALL subclasses of required builtins (including nested values) with exact TypeError. Reject other wrong types with exact TypeError. Validate ALL types before lengths/ranges, which raise exact ValueError. Exception messages are unconstrained. No input mutation, retained mutable state, I/O or dependencies.

Examples (argument lists -> result):
- `[0]` -> `0`
- `[1]` -> `1`
- `[7]` -> `49`
- `[9]` -> `81`
- `[10]` -> `1`
- `[12]` -> `5`
- `[19]` -> `82`
- `[99]` -> `162`
- `[100]` -> `1`
- `[123]` -> `14`
- `[321]` -> `14`
- `[1000]` -> `1`
- `[5555]` -> `100`
- `[9091]` -> `163`
- `[123456789]` -> `285`
- `[1000000001]` -> `2`
- `[True]` -> `raises TypeError`
- `[12.0]` -> `raises TypeError`
- `['12']` -> `raises TypeError`
- `[-12]` -> `raises ValueError`
- `[1000000000000000001]` -> `raises ValueError`

Only edit `digit_square_sum.py` and optional IMPLEMENTATION.md in this task directory.
Run `python3 tasks/digit-square-sum/check.py --solution "$PWD/tasks/digit-square-sum/digit_square_sum.py"`. The issue supplies the trusted checker pin. A pass remains CHECK_PASS_UNVERIFIED until independent source/scope review.
