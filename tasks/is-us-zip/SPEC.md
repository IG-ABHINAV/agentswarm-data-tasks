# Validate a US ZIP code string

Implement export function isUsZip(text) in is_us_zip.mjs,
Node 22 standard library only.

text must be a primitive string; boxed String objects (also subclasses),
numbers, missing arguments and all other values raise exact TypeError. Check
the type before the length. Then a string longer than 1000 UTF-16 code units
(its .length) raises exact RangeError.

Return the primitive boolean true when text is a US ZIP code in one of two
forms, otherwise false: exactly five ASCII digits ("12345"), or exactly five
ASCII digits, one "-" and exactly four ASCII digits ("12345-6789", ZIP+4).
Any digit values are accepted. Nothing else is accepted: no four or six
digits, no nine digits without the hyphen, no other separator (space,
underscore) or doubled hyphen, no hyphen without the four digits, no letters,
no spaces, trailing newline or trimming and no non-ASCII digits. "12345",
"00501-0001" and "12345-6789" are true; "1234", "123456789", "12345 6789",
"12345-" and "" are false.

Error messages are unconstrained. Keep no state between calls; repeated and
independent calls return the same result.

Examples (arguments -> result); every one is checked:
- `('12345') -> true`
- `('00000') -> true`
- `('99999') -> true`
- `('12345-6789') -> true`
- `('00501-0001') -> true`
- `('1234') -> false`
- `('123456') -> false`
- `('123456789') -> false`
- `('12345-678') -> false`
- `('12345-67890') -> false`
- `('12345 6789') -> false`
- `('12345_6789') -> false`
- `('12345-') -> false`
- `('-6789') -> false`
- `('') -> false`
- `(' 12345') -> false`
- `('12345 ') -> false`
- `('12345\n') -> false`
- `('\uff11\uff12\uff13\uff14\uff15') -> false`
- `('1\u0662345') -> false`
- `('1234a') -> false`
- `('12345-678a') -> false`
- `('12-345') -> false`
- `('12345--6789') -> false`
- `('ABCDE') -> false`
- `('12345-6789-0000') -> false`
- `('9'.repeat(5)) -> true`
- `('1'.repeat(1000)) -> false`
- `('12345\u0000') -> false`
- `(['12345','6789'].join('-')) -> true`
- `(12345) -> TypeError`
- `(null) -> TypeError`
- `(undefined) -> TypeError`
- `(new String('12345')) -> TypeError`
- `('1'.repeat(1001)) -> RangeError`

Only edit is_us_zip.mjs and optional IMPLEMENTATION.md in this task directory.
Quick run from the repository root (Node 22):
`node tasks/is-us-zip/check.mjs --solution "$PWD/tasks/is-us-zip/is_us_zip.mjs"`
The issue supplies a separate trusted checker pin and offline Docker command.
A pass remains CHECK_PASS_UNVERIFIED until independent source/scope review.
