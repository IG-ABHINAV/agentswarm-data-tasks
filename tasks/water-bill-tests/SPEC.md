# Write tests for a two-tier water bill function

Write `tests_submission.py` using Python 3.11+ standard library unittest. The
provided `implementation.py` exports `water_bill(units)`. Do not change it.
Only edit tests_submission.py and optional IMPLEMENTATION.md in this task.
Import `water_bill` from `implementation`; use unittest.TestCase subclasses.
No third-party packages, files, subprocesses, networking or implementation
source inspection. Tests must assert public behavior, not identify a mutant.
They run without the task checker on their import path.

units (water used in a month, in whole units) must have exact built-in int
type. Bool, int subclasses, floats, strings, None and containers raise
TypeError. Check the type before the range, so -1.0 raises TypeError. units
below 0 or above 1000 raises ValueError; 0 and 1000 are valid. Otherwise
return the bill as an exact int: a service charge of 5 plus 2 per unit for
the first 10 units (5 + 2 * units for 0-10), then 3 for each unit after the
tenth (25 + 3 * (units - 10) for 11-1000). Calls are deterministic; no
mutable state or side effects. Exception messages are unconstrained.

Examples: water_bill(0) == 5; water_bill(1) == 7; water_bill(10) == 25;
water_bill(11) == 28; water_bill(20) == 55; water_bill(1000) == 2995.
water_bill(-1) and water_bill(1001) raise ValueError; water_bill(True) and
water_bill(3.0) raise TypeError.

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

Run `python3 tasks/water-bill-tests/check.py --solution "$PWD/tasks/water-bill-tests/tests_submission.py"`.
The issue supplies the trusted checker pin. A pass remains CHECK_PASS_UNVERIFIED
until independent source/scope review.
