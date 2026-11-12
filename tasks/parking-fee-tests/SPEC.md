# Write tests for a tiered parking fee function

Write `tests_submission.py` using Python 3.11+ standard library unittest. The
provided `implementation.py` exports `parking_fee(minutes)`. Do not change it.
Only edit tests_submission.py and optional IMPLEMENTATION.md in this task.
Import `parking_fee` from `implementation`; use unittest.TestCase subclasses.
No third-party packages, files, subprocesses, networking or implementation
source inspection. Tests must assert public behavior, not identify a mutant.
They run without the task checker on their import path.

minutes (how long a car was parked, in whole minutes) must have exact
built-in int type. Bool, int subclasses, floats, strings, None and containers
raise TypeError. Check the type before the range, so -1.0 raises TypeError.
minutes below 0 or above 1440 raises ValueError; 0 and 1440 are valid.
Otherwise return the fee as an exact int: 0 for 0-15 (grace period), 4 for
16-60, 10 for 61-180 and 25 for 181-1440. Each lower bound is inclusive (16
pays 4, 61 pays 10, 181 pays 25). Calls are deterministic; no mutable state
or side effects. Exception messages are unconstrained.

Examples: parking_fee(0) == 0; parking_fee(15) == 0; parking_fee(16) == 4;
parking_fee(60) == 4; parking_fee(61) == 10; parking_fee(180) == 10;
parking_fee(181) == 25; parking_fee(1440) == 25. parking_fee(-1) and
parking_fee(1441) raise ValueError; parking_fee(True) and parking_fee(30.0)
raise TypeError.

Acceptance: at least eight discovered test methods, zero skipped tests and all
must pass against the provided reference implementation. The same tests then
run against ten supplied spec-contradicting implementations in fresh isolated
Python subprocesses. At least eight of ten must fail by a unittest assertion
failure or error. Empty suites, imports that fail before tests are discovered,
timeouts and system exits do not count as mutant kills. Never skip or mark
expected failures. The checker names the number of mutants killed; stronger
suites can kill all ten. Only the submitted test file is copied beside the
selected implementation; keep all helpers in that file. Each subprocess has
five seconds.

Run `python3 tasks/parking-fee-tests/check.py --solution "$PWD/tasks/parking-fee-tests/tests_submission.py"`.
The issue supplies the trusted checker pin. A pass remains CHECK_PASS_UNVERIFIED
until independent source/scope review.
