# Validate a 24-hour HH:MM time string

Implement export function isTime24h(text) in is_time_24h.mjs,
Node 22 standard library only.

text must be a primitive string; boxed String objects (also subclasses),
numbers, missing arguments and all other values raise exact TypeError. Check
the type before the length. Then a string longer than 1000 UTF-16 code units
(its .length) raises exact RangeError.

Return the primitive boolean true when text is a 24-hour clock time in HH:MM
form, otherwise false. That is exactly two ASCII digits for the hour (00 to
23), one ":" and exactly two ASCII digits for the minute (00 to 59). Nothing
else is accepted: no one-digit hours or minutes, no 24:00, no minute 60, no
seconds, no other or missing separator, no AM/PM suffix, no spaces, trailing
newline or trimming and no non-ASCII digits. "00:00", "09:05" and "23:59"
are true; "24:00", "23:60", "9:05", "09:05:00" and "" are false.

Error messages are unconstrained. Keep no state between calls; repeated and
independent calls return the same result.

Examples (arguments -> result); every one is checked:
- `('00:00') -> true`
- `('23:59') -> true`
- `('12:30') -> true`
- `('09:05') -> true`
- `('19:59') -> true`
- `('20:00') -> true`
- `('10:00') -> true`
- `('24:00') -> false`
- `('23:60') -> false`
- `('29:00') -> false`
- `('9:05') -> false`
- `('09:5') -> false`
- `('0905') -> false`
- `('09.05') -> false`
- `('09-05') -> false`
- `('09:05:00') -> false`
- `('') -> false`
- `(' 09:05') -> false`
- `('09:05 ') -> false`
- `('09:05\n') -> false`
- `('\uff10\uff19:05') -> false`
- `('0\u0669:05') -> false`
- `('1a:00') -> false`
- `('12:3x') -> false`
- `('-1:00') -> false`
- `('09 05') -> false`
- `('7:30 PM') -> false`
- `('12:00am') -> false`
- `('99:99') -> false`
- `('13:00') -> true`
- `('0'.repeat(2)+':'+'0'.repeat(2)) -> true`
- `(':'.repeat(1000)) -> false`
- `('09:05\u0000') -> false`
- `(['23','59'].join(':')) -> true`
- `(1) -> TypeError`
- `(null) -> TypeError`
- `(905) -> TypeError`
- `(new String('09:05')) -> TypeError`
- `('0'.repeat(1001)) -> RangeError`

Only edit is_time_24h.mjs and optional IMPLEMENTATION.md in this task directory.
Quick run from the repository root (Node 22):
`node tasks/is-time-24h/check.mjs --solution "$PWD/tasks/is-time-24h/is_time_24h.mjs"`
The issue supplies a separate trusted checker pin and offline Docker command.
A pass remains CHECK_PASS_UNVERIFIED until independent source/scope review.
