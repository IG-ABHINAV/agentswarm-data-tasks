# Write tests for a tiered speeding fine function

Write `tests_submission.py` using Python 3.11+ standard library unittest. The
provided `implementation.py` exports `speed_fine(over)`. Do not change it.
Only edit tests_submission.py and optional IMPLEMENTATION.md in this task.
Import `speed_fine` from `implementation`; use unittest.TestCase subclasses.
No third-party packages, files, subprocesses, networking or implementation
source inspection. Tests must assert public behavior, not identify a mutant.
They run without the task checker on their import path.

over (how many km/h a car was above the speed limit) must have exact built-in
int type. Bool, int subclasses, floats, strings, None and containers raise
TypeError. Check the type before the range, so -1.0 raises TypeError. over
below 0 or above 200 raises ValueError; 0 and 200 are valid. Otherwise return
the fine as an exact int: 0 for 0-5 (tolerance), 50 for 6-20, 150 for 21-40
and 400 for 41-200. Each lower bound is inclusive (6 pays 50, 21 pays 150,
41 pays 400). Calls are deterministic; no mutable state or side effects.
Exception messages are unconstrained.

Examples: speed_fine(0) == 0; speed_fine(5) == 0; speed_fine(6) == 50;
speed_fine(20) == 50; speed_fine(21) == 150; speed_fine(40) == 150;
speed_fine(41) == 400; speed_fine(200) == 400. speed_fine(-1) and
speed_fine(201) raise ValueError; speed_fine(True) and speed_fine(10.0)
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

Run `python3 tasks/speed-fine-tests/check.py --solution "$PWD/tasks/speed-fine-tests/tests_submission.py"`.
The issue supplies the trusted checker pin. A pass remains CHECK_PASS_UNVERIFIED
until independent source/scope review.
