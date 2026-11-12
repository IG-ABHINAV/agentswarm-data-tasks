# Write tests for a capped hourly bike rental fee function

Write `tests_submission.py` using Python 3.11+ standard library unittest. The
provided `implementation.py` exports `rental_fee(hours)`. Do not change it.
Only edit tests_submission.py and optional IMPLEMENTATION.md in this task.
Import `rental_fee` from `implementation`; use unittest.TestCase subclasses.
No third-party packages, files, subprocesses, networking or implementation
source inspection. Tests must assert public behavior, not identify a mutant.
They run without the task checker on their import path.

hours (how long a bike was rented, in whole hours) must have exact built-in
int type. Bool, int subclasses, floats, strings, None and containers raise
TypeError. Check the type before the range, so -1.0 raises TypeError. hours
below 1 or above 72 raises ValueError; 1 and 72 are valid. Otherwise return
the fee as an exact int: 4 per hour for the first 3 hours (4 * hours for 1-3),
then 2 more for each hour after the third (12 + 2 * (hours - 3)), but never
more than 30. So the fee reaches the cap of 30 at 12 hours and stays 30 up to
72 hours. Calls are deterministic; no mutable state or side effects.
Exception messages are unconstrained.

Examples: rental_fee(1) == 4; rental_fee(3) == 12; rental_fee(4) == 14;
rental_fee(11) == 28; rental_fee(12) == 30; rental_fee(13) == 30;
rental_fee(72) == 30. rental_fee(0) and rental_fee(73) raise ValueError;
rental_fee(True) and rental_fee(3.0) raise TypeError.

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

Run `python3 tasks/bike-rental-tests/check.py --solution "$PWD/tasks/bike-rental-tests/tests_submission.py"`.
The issue supplies the trusted checker pin. A pass remains CHECK_PASS_UNVERIFIED
until independent source/scope review.
