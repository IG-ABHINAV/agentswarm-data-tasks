# reverse-digits
Implement `reverse_digits` in `reverse_digits.py`. Python 3.11+ standard library only.

Require n, an exact built-in int in [0,1000000000000000000] (0 to 10**18); negative numbers raise exact ValueError. Write n in decimal without leading zeros, reverse the order of its digits and return the result as an exact built-in int (so leading zeros of the reversed digits disappear). reverse_digits(123) is 321, reverse_digits(120) is 21, reverse_digits(1000) is 1, reverse_digits(7) is 7 and reverse_digits(0) is 0. Return an int, not a string.

Reject bool and ALL subclasses of required builtins (including nested values) with exact TypeError. Reject other wrong types with exact TypeError. Validate ALL types before lengths/ranges, which raise exact ValueError. Exception messages are unconstrained. No input mutation, retained mutable state, I/O or dependencies.

Examples (argument lists -> result):
- `[0]` -> `0`
- `[1]` -> `1`
- `[7]` -> `7`
- `[10]` -> `1`
- `[12]` -> `21`
- `[21]` -> `12`
- `[100]` -> `1`
- `[120]` -> `21`
- `[123]` -> `321`
- `[1000]` -> `1`
- `[1203]` -> `3021`
- `[9009]` -> `9009`
- `[10203]` -> `30201`
- `[98765]` -> `56789`
- `[1000000]` -> `1`
- `[123456789]` -> `987654321`
- `[True]` -> `raises TypeError`
- `[12.0]` -> `raises TypeError`
- `['12']` -> `raises TypeError`
- `[-12]` -> `raises ValueError`
- `[1000000000000000001]` -> `raises ValueError`

Only edit `reverse_digits.py` and optional IMPLEMENTATION.md in this task directory.
Run `python3 tasks/reverse-digits/check.py --solution "$PWD/tasks/reverse-digits/reverse_digits.py"`. The issue supplies the trusted checker pin. A pass remains CHECK_PASS_UNVERIFIED until independent source/scope review.
