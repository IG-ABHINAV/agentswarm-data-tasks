# factorial-zeros
Implement `factorial_zeros` in `factorial_zeros.py`. Python 3.11+ standard library only.

Require n, an exact built-in int in [0,1000000000000000000] (0 to 10**18); negative numbers raise exact ValueError. Return, as an exact built-in int, the number of trailing zero digits of n! (n factorial, the product 1 * 2 * ... * n; 0! is 1) written in decimal. So factorial_zeros(0) and factorial_zeros(4) are 0, factorial_zeros(5) is 1, factorial_zeros(10) is 2, factorial_zeros(25) is 6 and factorial_zeros(100) is 24. Do not compute n! itself: count the factors of 5 (n // 5 + n // 25 + n // 125 + ...), which is fast for every allowed n.

Reject bool and ALL subclasses of required builtins (including nested values) with exact TypeError. Reject other wrong types with exact TypeError. Validate ALL types before lengths/ranges, which raise exact ValueError. Exception messages are unconstrained. No input mutation, retained mutable state, I/O or dependencies.

Examples (argument lists -> result):
- `[0]` -> `0`
- `[1]` -> `0`
- `[4]` -> `0`
- `[5]` -> `1`
- `[9]` -> `1`
- `[10]` -> `2`
- `[24]` -> `4`
- `[25]` -> `6`
- `[26]` -> `6`
- `[49]` -> `10`
- `[50]` -> `12`
- `[100]` -> `24`
- `[124]` -> `28`
- `[125]` -> `31`
- `[1000]` -> `249`
- `[10000]` -> `2499`
- `[True]` -> `raises TypeError`
- `[5.0]` -> `raises TypeError`
- `['5']` -> `raises TypeError`
- `[-1]` -> `raises ValueError`
- `[1000000000000000001]` -> `raises ValueError`

Only edit `factorial_zeros.py` and optional IMPLEMENTATION.md in this task directory.
Run `python3 tasks/factorial-zeros/check.py --solution "$PWD/tasks/factorial-zeros/factorial_zeros.py"`. The issue supplies the trusted checker pin. A pass remains CHECK_PASS_UNVERIFIED until independent source/scope review.
