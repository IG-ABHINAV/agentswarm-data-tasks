# Validate a MAJOR.MINOR.PATCH version string

Implement export function isSemverCore(text) in is_semver_core.mjs,
Node 22 standard library only.

text must be a primitive string; boxed String objects (also subclasses),
numbers, missing arguments and all other values raise exact TypeError. Check
the type before the length. Then a string longer than 1000 UTF-16 code units
(its .length) raises exact RangeError.

Return the primitive boolean true when text is a version core of the form
MAJOR.MINOR.PATCH, otherwise false: exactly three parts separated by exactly
two "." characters, where each part is either "0" or one or more ASCII digits
that do not start with 0. Parts may have any number of digits (there is no
numeric limit). Nothing else is accepted: no fewer or more than three parts,
no empty parts, no leading zeros such as "01", no "v" prefix, no pre-release
("-alpha") or build ("+build") suffix, no other separators, no signs, no
surrounding spaces, trailing newline or trimming and no non-ASCII digits.
"0.0.0", "1.2.3" and "10.20.30" are true; "1.2", "1.2.3.4", "01.2.3",
"v1.2.3", "1.2.3-alpha" and "" are false.

Error messages are unconstrained. Keep no state between calls; repeated and
independent calls return the same result.

Examples (arguments -> result); every one is checked:
- `('0.0.0') -> true`
- `('1.2.3') -> true`
- `('10.20.30') -> true`
- `('1.0.0') -> true`
- `('0.1.0') -> true`
- `('0.0.1') -> true`
- `('999.999.999') -> true`
- `('1.2') -> false`
- `('1') -> false`
- `('1.2.3.4') -> false`
- `('01.2.3') -> false`
- `('1.02.3') -> false`
- `('1.2.03') -> false`
- `('00.0.0') -> false`
- `('v1.2.3') -> false`
- `('V1.2.3') -> false`
- `('1.2.3-alpha') -> false`
- `('1.2.3+build') -> false`
- `('1.2.3-rc.1') -> false`
- `('') -> false`
- `('1..3') -> false`
- `('.1.2') -> false`
- `('1.2.') -> false`
- `('1.2.3.') -> false`
- `(' 1.2.3') -> false`
- `('1.2.3 ') -> false`
- `('1.2.3\n') -> false`
- `('1,2,3') -> false`
- `('1-2-3') -> false`
- `('a.b.c') -> false`
- `('\uff11.2.3') -> false`
- `('1.\u0662.3') -> false`
- `('1.2.x') -> false`
- `('1\u0662.0.0') -> false`
- `('-1.2.3') -> false`
- `('1.-2.3') -> false`
- `('18446744073709551616.0.0') -> true`
- `('1'.repeat(300)+'.0.'+'2'.repeat(300)) -> true`
- `('.'.repeat(1000)) -> false`
- `('1.2.3\u0000') -> false`
- `(['1','2','3'].join('.')) -> true`
- `(1.2) -> TypeError`
- `(null) -> TypeError`
- `(undefined) -> TypeError`
- `(new String('1.2.3')) -> TypeError`
- `('1'.repeat(1001)) -> RangeError`

Only edit is_semver_core.mjs and optional IMPLEMENTATION.md in this task directory.
Quick run from the repository root (Node 22):
`node tasks/is-semver-core/check.mjs --solution "$PWD/tasks/is-semver-core/is_semver_core.mjs"`
The issue supplies a separate trusted checker pin and offline Docker command.
A pass remains CHECK_PASS_UNVERIFIED until independent source/scope review.
