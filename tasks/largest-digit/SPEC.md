# largest-digit
Implement `largest_digit` in `largest_digit.py`. Python 3.11+ standard library only.

Require n, an exact built-in int in [0,1000000000000000000] (0 to 10**18); negative numbers raise exact ValueError. Write n in decimal without leading zeros and return, as an exact built-in int (not a string), the largest of its digits. So largest_digit(0) is 0, largest_digit(7) is 7, largest_digit(10) is 1, largest_digit(1234) is 4, largest_digit(909) is 9 and largest_digit(5551) is 5.

Reject bool and ALL subclasses of required builtins (including nested values) with exact TypeError. Reject other wrong types with exact TypeError. Validate ALL types before lengths/ranges, which raise exact ValueError. Exception messages are unconstrained. No input mutation, retained mutable state, I/O or dependencies.

Examples (argument lists -> result):
- `[0]` -> `0`
- `[1]` -> `1`
- `[7]` -> `7`
- `[9]` -> `9`
- `[10]` -> `1`
- `[19]` -> `9`
- `[90]` -> `9`
- `[99]` -> `9`
- `[101]` -> `1`
- `[909]` -> `9`
- `[1234]` -> `4`
- `[4321]` -> `4`
- `[5551]` -> `5`
- `[1000000]` -> `1`
- `[8000000008]` -> `8`
- `[123456789]` -> `9`
- `[111111111]` -> `1`
- `[2020202]` -> `2`
- `[True]` -> `raises TypeError`
- `[12.0]` -> `raises TypeError`
- `['12']` -> `raises TypeError`
- `[-5]` -> `raises ValueError`
- `[1000000000000000001]` -> `raises ValueError`

Only edit `largest_digit.py` and optional IMPLEMENTATION.md in this task directory.
Run `python3 tasks/largest-digit/check.py --solution "$PWD/tasks/largest-digit/largest_digit.py"`. The issue supplies the trusted checker pin. A pass remains CHECK_PASS_UNVERIFIED until independent source/scope review.
