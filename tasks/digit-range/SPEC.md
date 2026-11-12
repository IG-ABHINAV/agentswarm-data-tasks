# digit-range
Implement `digit_range` in `digit_range.py`. Python 3.11+ standard library only.

Require n, an exact built-in int in [0,1000000000000000000] (0 to 10**18); negative numbers raise exact ValueError. Write n in decimal without leading zeros and return, as an exact built-in int, its largest digit minus its smallest digit (0 digits count). So digit_range(0) is 0, digit_range(7) is 0, digit_range(10) is 1, digit_range(1234) is 3, digit_range(9091) is 9 and digit_range(5555) is 0.

Reject bool and ALL subclasses of required builtins (including nested values) with exact TypeError. Reject other wrong types with exact TypeError. Validate ALL types before lengths/ranges, which raise exact ValueError. Exception messages are unconstrained. No input mutation, retained mutable state, I/O or dependencies.

Examples (argument lists -> result):
- `[0]` -> `0`
- `[1]` -> `0`
- `[7]` -> `0`
- `[9]` -> `0`
- `[10]` -> `1`
- `[19]` -> `8`
- `[90]` -> `9`
- `[99]` -> `0`
- `[101]` -> `1`
- `[1234]` -> `3`
- `[4321]` -> `3`
- `[5555]` -> `0`
- `[9091]` -> `9`
- `[1000000]` -> `1`
- `[8000000008]` -> `8`
- `[123456789]` -> `8`
- `[111111111]` -> `0`
- `[2020202]` -> `2`
- `[True]` -> `raises TypeError`
- `[12.0]` -> `raises TypeError`
- `['12']` -> `raises TypeError`
- `[-12]` -> `raises ValueError`
- `[1000000000000000001]` -> `raises ValueError`

Only edit `digit_range.py` and optional IMPLEMENTATION.md in this task directory.
Run `python3 tasks/digit-range/check.py --solution "$PWD/tasks/digit-range/digit_range.py"`. The issue supplies the trusted checker pin. A pass remains CHECK_PASS_UNVERIFIED until independent source/scope review.
