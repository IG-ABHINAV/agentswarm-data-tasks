# Validate a canonical UUID string

Implement export function isUuid(text) in is_uuid.mjs,
Node 22 standard library only.

text must be a primitive string; boxed String objects (also subclasses),
numbers, missing arguments and all other values raise exact TypeError. Check
the type before the length. Then a string longer than 1000 UTF-16 code units
(its .length) raises exact RangeError.

Return the primitive boolean true when text is a UUID in canonical text form,
otherwise false. That is exactly 32 ASCII hex digits (0-9, a-f, A-F; upper and
lower case can be mixed) in five groups of 8, 4, 4, 4 and 12 digits separated
by single "-" characters. Any digit values are accepted (no version or
variant check). Nothing else is accepted: no missing or extra hyphens, braces,
"urn:uuid:" prefix, spaces, trailing newline or trimming and no non-ASCII
digits. "123e4567-e89b-12d3-a456-426614174000" and
"00000000-0000-0000-0000-000000000000" are true;
"123e4567e89b12d3a456426614174000",
"{123e4567-e89b-12d3-a456-426614174000}" and "" are false.

Error messages are unconstrained. Keep no state between calls; repeated and
independent calls return the same result.

Examples (arguments -> result); every one is checked:
- `('123e4567-e89b-12d3-a456-426614174000') -> true`
- `('00000000-0000-0000-0000-000000000000') -> true`
- `('FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF') -> true`
- `('aBcDeF01-2345-6789-abcd-EF0123456789') -> true`
- `('123e4567e89b12d3a456426614174000') -> false`
- `('{123e4567-e89b-12d3-a456-426614174000}') -> false`
- `('123e4567-e89b-12d3-a456-42661417400') -> false`
- `('123e4567-e89b-12d3-a456-4266141740000') -> false`
- `('123e4567-e89b-12d3-a456_426614174000') -> false`
- `('123e456-7e89b-12d3-a456-426614174000') -> false`
- `('123e4567-e89b-12d3-a4564-26614174000') -> false`
- `('123e4567-e89b-12d3-a456-42661417400g') -> false`
- `('') -> false`
- `(' 123e4567-e89b-12d3-a456-426614174000') -> false`
- `('123e4567-e89b-12d3-a456-426614174000 ') -> false`
- `('123e4567-e89b-12d3-a456-426614174000\n') -> false`
- `('urn:uuid:123e4567-e89b-12d3-a456-426614174000') -> false`
- `('123e4567--e89b-12d3-a456-426614174000') -> false`
- `('123e4567-e89b-12d3-a456-426614174000-') -> false`
- `('\uff11\uff12\uff13e4567-e89b-12d3-a456-426614174000') -> false`
- `('0'.repeat(8)+'-0000'.repeat(3)+'-'+'0'.repeat(12)) -> true`
- `('-'.repeat(1000)) -> false`
- `('123e4567-e89b-12d3-a456-426614174000\u0000') -> false`
- `(['12345678','9abc','def0','1234','56789abcdef0'].join('-')) -> true`
- `(1) -> TypeError`
- `(null) -> TypeError`
- `(123) -> TypeError`
- `(new String('00000000-0000-0000-0000-000000000000')) -> TypeError`
- `('0'.repeat(1001)) -> RangeError`

Only edit is_uuid.mjs and optional IMPLEMENTATION.md in this task directory.
Quick run from the repository root (Node 22):
`node tasks/is-uuid/check.mjs --solution "$PWD/tasks/is-uuid/is_uuid.mjs"`
The issue supplies a separate trusted checker pin and offline Docker command.
A pass remains CHECK_PASS_UNVERIFIED until independent source/scope review.
