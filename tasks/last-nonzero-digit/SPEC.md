# last-nonzero-digit
Implement `last_nonzero_digit` in `last_nonzero_digit.py`. Python 3.11+ standard library only.

Require n, an exact built-in int in [0,1000000000000000000] (0 to 10**18); negative numbers raise exact ValueError. Write n in decimal without leading zeros and return, as an exact built-in int, its rightmost digit that is not 0; for n = 0 (no such digit) return 0. So last_nonzero_digit(0) is 0, last_nonzero_digit(7) is 7, last_nonzero_digit(10) is 1, last_nonzero_digit(120) is 2, last_nonzero_digit(1005) is 5 and last_nonzero_digit(9000) is 9.

Reject bool and ALL subclasses of required builtins (including nested values) with exact TypeError. Reject other wrong types with exact TypeError. Validate ALL types before lengths/ranges, which raise exact ValueError. Exception messages are unconstrained. No input mutation, retained mutable state, I/O or dependencies.

Examples (argument lists -> result):
- `[0]` -> `0`
- `[1]` -> `1`
- `[7]` -> `7`
- `[9]` -> `9`
- `[10]` -> `1`
- `[11]` -> `1`
- `[20]` -> `2`
- `[100]` -> `1`
- `[120]` -> `2`
- `[101]` -> `1`
- `[1005]` -> `5`
- `[9000]` -> `9`
- `[1230000]` -> `3`
- `[123456789]` -> `9`
- `[1000000]` -> `1`
- `[50505000]` -> `5`
- `[True]` -> `raises TypeError`
- `[10.0]` -> `raises TypeError`
- `['10']` -> `raises TypeError`
- `[-10]` -> `raises ValueError`
- `[1000000000000000001]` -> `raises ValueError`

Only edit `last_nonzero_digit.py` and optional IMPLEMENTATION.md in this task directory.
Run `python3 tasks/last-nonzero-digit/check.py --solution "$PWD/tasks/last-nonzero-digit/last_nonzero_digit.py"`. The issue supplies the trusted checker pin. A pass remains CHECK_PASS_UNVERIFIED until independent source/scope review.
