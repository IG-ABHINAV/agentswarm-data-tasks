# count-even-digits
Implement `count_even_digits` in `count_even_digits.py`. Python 3.11+ standard library only.

Require n, an exact built-in int in [0,1000000000000000000] (0 to 10**18); negative numbers raise exact ValueError. Write n in decimal without leading zeros and return, as an exact built-in int, how many of its digits are even (0, 2, 4, 6 or 8; 0 counts as even). So count_even_digits(0) is 1, count_even_digits(7) is 0, count_even_digits(10) is 1, count_even_digits(2468) is 4, count_even_digits(13579) is 0 and count_even_digits(1000) is 3.

Reject bool and ALL subclasses of required builtins (including nested values) with exact TypeError. Reject other wrong types with exact TypeError. Validate ALL types before lengths/ranges, which raise exact ValueError. Exception messages are unconstrained. No input mutation, retained mutable state, I/O or dependencies.

Examples (argument lists -> result):
- `[0]` -> `1`
- `[1]` -> `0`
- `[2]` -> `1`
- `[7]` -> `0`
- `[10]` -> `1`
- `[11]` -> `0`
- `[20]` -> `2`
- `[22]` -> `2`
- `[135]` -> `0`
- `[246]` -> `3`
- `[1000]` -> `3`
- `[2468]` -> `4`
- `[13579]` -> `0`
- `[24680]` -> `5`
- `[1234567890]` -> `5`
- `[999999999]` -> `0`
- `[808080]` -> `6`
- `[True]` -> `raises TypeError`
- `[24.0]` -> `raises TypeError`
- `['24']` -> `raises TypeError`
- `[-24]` -> `raises ValueError`
- `[1000000000000000001]` -> `raises ValueError`

Only edit `count_even_digits.py` and optional IMPLEMENTATION.md in this task directory.
Run `python3 tasks/count-even-digits/check.py --solution "$PWD/tasks/count-even-digits/count_even_digits.py"`. The issue supplies the trusted checker pin. A pass remains CHECK_PASS_UNVERIFIED until independent source/scope review.
