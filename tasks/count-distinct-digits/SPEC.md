# count-distinct-digits
Implement `count_distinct_digits` in `count_distinct_digits.py`. Python 3.11+ standard library only.

Require n, an exact built-in int in [0,1000000000000000000] (0 to 10**18); negative numbers raise exact ValueError. Write n in decimal without leading zeros and return, as an exact built-in int, how many different digit values it contains (0 counts as a digit). So count_distinct_digits(0) is 1, count_distinct_digits(7) is 1, count_distinct_digits(10) is 2, count_distinct_digits(1121) is 2, count_distinct_digits(1234567890) is 10 and count_distinct_digits(5555) is 1.

Reject bool and ALL subclasses of required builtins (including nested values) with exact TypeError. Reject other wrong types with exact TypeError. Validate ALL types before lengths/ranges, which raise exact ValueError. Exception messages are unconstrained. No input mutation, retained mutable state, I/O or dependencies.

Examples (argument lists -> result):
- `[0]` -> `1`
- `[1]` -> `1`
- `[7]` -> `1`
- `[10]` -> `2`
- `[11]` -> `1`
- `[100]` -> `2`
- `[101]` -> `2`
- `[1121]` -> `2`
- `[1234]` -> `4`
- `[4321]` -> `4`
- `[5555]` -> `1`
- `[9091]` -> `3`
- `[1234567890]` -> `10`
- `[9876543210]` -> `10`
- `[1000000]` -> `2`
- `[111111111]` -> `1`
- `[2020202]` -> `2`
- `[True]` -> `raises TypeError`
- `[12.0]` -> `raises TypeError`
- `['12']` -> `raises TypeError`
- `[-12]` -> `raises ValueError`
- `[1000000000000000001]` -> `raises ValueError`

Only edit `count_distinct_digits.py` and optional IMPLEMENTATION.md in this task directory.
Run `python3 tasks/count-distinct-digits/check.py --solution "$PWD/tasks/count-distinct-digits/count_distinct_digits.py"`. The issue supplies the trusted checker pin. A pass remains CHECK_PASS_UNVERIFIED until independent source/scope review.
