# count-digit-changes
Implement `count_digit_changes` in `count_digit_changes.py`. Python 3.11+ standard library only.

Require n, an exact built-in int in [0,1000000000000000000] (0 to 10**18); negative numbers raise exact ValueError. Write n in decimal without leading zeros and return, as an exact built-in int, how many pairs of neighbouring digits differ (the number of places where the digit changes when read from left to right). So count_digit_changes(0) is 0, count_digit_changes(7) is 0, count_digit_changes(10) is 1, count_digit_changes(1122) is 1, count_digit_changes(1212) is 3 and count_digit_changes(5555) is 0.

Reject bool and ALL subclasses of required builtins (including nested values) with exact TypeError. Reject other wrong types with exact TypeError. Validate ALL types before lengths/ranges, which raise exact ValueError. Exception messages are unconstrained. No input mutation, retained mutable state, I/O or dependencies.

Examples (argument lists -> result):
- `[0]` -> `0`
- `[1]` -> `0`
- `[7]` -> `0`
- `[10]` -> `1`
- `[11]` -> `0`
- `[12]` -> `1`
- `[21]` -> `1`
- `[100]` -> `1`
- `[101]` -> `2`
- `[1122]` -> `1`
- `[1212]` -> `3`
- `[5555]` -> `0`
- `[1000]` -> `1`
- `[9091]` -> `3`
- `[123456789]` -> `8`
- `[111111111]` -> `0`
- `[2020202]` -> `6`
- `[True]` -> `raises TypeError`
- `[12.0]` -> `raises TypeError`
- `['12']` -> `raises TypeError`
- `[-12]` -> `raises ValueError`
- `[1000000000000000001]` -> `raises ValueError`

Only edit `count_digit_changes.py` and optional IMPLEMENTATION.md in this task directory.
Run `python3 tasks/count-digit-changes/check.py --solution "$PWD/tasks/count-digit-changes/count_digit_changes.py"`. The issue supplies the trusted checker pin. A pass remains CHECK_PASS_UNVERIFIED until independent source/scope review.
