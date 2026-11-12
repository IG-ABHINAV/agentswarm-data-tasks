# Write tests for a two-rate taxi fare function

Write `tests_submission.py` using Python 3.11+ standard library unittest. The
provided `implementation.py` exports `taxi_fare(km)`. Do not change it.
Only edit tests_submission.py and optional IMPLEMENTATION.md in this task.
Import `taxi_fare` from `implementation`; use unittest.TestCase subclasses.
No third-party packages, files, subprocesses, networking or implementation
source inspection. Tests must assert public behavior, not identify a mutant.
They run without the task checker on their import path.

km (trip length in whole kilometres) must have exact built-in int type. Bool,
int subclasses, floats, strings, None and containers raise TypeError. Check
the type before the range, so -1.0 raises TypeError. km below 0 or above 500
raises ValueError; 0 and 500 are valid. Otherwise return the fare as an exact
int: a base charge of 4 plus 3 per kilometre for the first 5 kilometres
(4 + 3 * km for 0-5), then 2 for each kilometre after the fifth
(19 + 2 * (km - 5) for 6-500). Calls are deterministic; no mutable state or
side effects. Exception messages are unconstrained.

Examples: taxi_fare(0) == 4; taxi_fare(1) == 7; taxi_fare(5) == 19;
taxi_fare(6) == 21; taxi_fare(10) == 29; taxi_fare(500) == 1009.
taxi_fare(-1) and taxi_fare(501) raise ValueError; taxi_fare(True) and
taxi_fare(3.0) raise TypeError.

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

Run `python3 tasks/taxi-fare-tests/check.py --solution "$PWD/tasks/taxi-fare-tests/tests_submission.py"`.
The issue supplies the trusted checker pin. A pass remains CHECK_PASS_UNVERIFIED
until independent source/scope review.
