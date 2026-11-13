# Validate a NNN-NNN-NNNN phone number string

Implement export function isUsPhone(text) in is_us_phone.mjs,
Node 22 standard library only.

text must be a primitive string; boxed String objects (also subclasses),
numbers, missing arguments and all other values raise exact TypeError. Check
the type before the length. Then a string longer than 1000 UTF-16 code units
(its .length) raises exact RangeError.

Return the primitive boolean true when text is a phone number in exactly the
form NNN-NNN-NNNN, otherwise false: three ASCII digits, "-", three ASCII
digits, "-" and four ASCII digits (12 characters in total). Any digit values
are accepted. Nothing else is accepted: no ten digits without hyphens, no
spaces, dots, underscores or parentheses as separators, no doubled or extra
hyphens, no other group lengths, no country code or "+", no extension, no
letters, no surrounding spaces, trailing newline or trimming and no non-ASCII
digits. "555-123-4567" and "000-000-0000" are true; "5551234567",
"555 123 4567", "(555) 123-4567", "555-1234-567" and "" are false.

Error messages are unconstrained. Keep no state between calls; repeated and
independent calls return the same result.

Examples (arguments -> result); every one is checked:
- `('555-123-4567') -> true`
- `('000-000-0000') -> true`
- `('999-999-9999') -> true`
- `('212-555-0100') -> true`
- `('5551234567') -> false`
- `('555 123 4567') -> false`
- `('555.123.4567') -> false`
- `('(555) 123-4567') -> false`
- `('(555)-123-4567') -> false`
- `('555-1234-567') -> false`
- `('55-123-4567') -> false`
- `('5555-123-4567') -> false`
- `('555-123-456') -> false`
- `('555-123-45678') -> false`
- `('555--123-4567') -> false`
- `('555-123-4567-') -> false`
- `('-555-123-4567') -> false`
- `('') -> false`
- `('  ') -> false`
- `('555-123-4567\n') -> false`
- `(' 555-123-4567') -> false`
- `('555-123-4567 ') -> false`
- `('+1-555-123-4567') -> false`
- `('1-555-123-4567') -> false`
- `('555-abc-4567') -> false`
- `('\uff15\uff15\uff15-123-4567') -> false`
- `('55\u0665-123-4567') -> false`
- `('555_123_4567') -> false`
- `('555-123-4567x12') -> false`
- `('5'.repeat(3)+'-'+'1'.repeat(3)+'-'+'2'.repeat(4)) -> true`
- `('-'.repeat(1000)) -> false`
- `('555-123-4567\u0000') -> false`
- `(['555','123','4567'].join('-')) -> true`
- `(5551234567) -> TypeError`
- `(null) -> TypeError`
- `(undefined) -> TypeError`
- `(new String('555-123-4567')) -> TypeError`
- `('5'.repeat(1001)) -> RangeError`

Only edit is_us_phone.mjs and optional IMPLEMENTATION.md in this task directory.
Quick run from the repository root (Node 22):
`node tasks/is-us-phone/check.mjs --solution "$PWD/tasks/is-us-phone/is_us_phone.mjs"`
The issue supplies a separate trusted checker pin and offline Docker command.
A pass remains CHECK_PASS_UNVERIFIED until independent source/scope review.
