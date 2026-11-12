# Validate a plain decimal number string

Implement export function isDecimalNumber(text) in is_decimal_number.mjs,
Node 22 standard library only.

text must be a primitive string; boxed String objects (also subclasses),
numbers, missing arguments and all other values raise exact TypeError. Check
the type before the length. Then a string longer than 1000 UTF-16 code units
(its .length) raises exact RangeError.

Return the primitive boolean true when text is a plain decimal number,
otherwise false: an optional leading "-", then an integer part that is either
"0" or one or more ASCII digits not starting with 0, then optionally a "."
followed by one or more ASCII digits. Parts may have any number of digits
(there is no numeric limit), and "-0" and "0.000" are accepted. Nothing else
is accepted: no "+" sign, no leading zeros such as "01", no missing integer
part (".5"), no empty fraction ("5."), no exponent ("1e3"), no commas,
underscores or spaces inside, no hexadecimal, NaN or Infinity, no surrounding
spaces, trailing newline or trimming and no non-ASCII digits. "0", "42",
"-12.5" and "10.25" are true; "01", ".5", "5.", "+1", "1e3" and "" are
false.

Error messages are unconstrained. Keep no state between calls; repeated and
independent calls return the same result.

Examples (arguments -> result); every one is checked:
- `('0') -> true`
- `('7') -> true`
- `('42') -> true`
- `('-12.5') -> true`
- `('10.25') -> true`
- `('0.5') -> true`
- `('-0') -> true`
- `('-0.0') -> true`
- `('0.000') -> true`
- `('100') -> true`
- `('123456789.987654321') -> true`
- `('01') -> false`
- `('00') -> false`
- `('-01.5') -> false`
- `('.5') -> false`
- `('-.5') -> false`
- `('5.') -> false`
- `('-') -> false`
- `('') -> false`
- `('+1') -> false`
- `('+0.5') -> false`
- `('1e3') -> false`
- `('1E3') -> false`
- `('1.2.3') -> false`
- `('1,5') -> false`
- `('1 000') -> false`
- `(' 1') -> false`
- `('1 ') -> false`
- `('1\n') -> false`
- `('--1') -> false`
- `('1-') -> false`
- `('0x1F') -> false`
- `('NaN') -> false`
- `('Infinity') -> false`
- `('1.5e-3') -> false`
- `('\uff11') -> false`
- `('1\u0662') -> false`
- `('1.\u0665') -> false`
- `('\u0661') -> false`
- `('1x5') -> false`
- `('1_000') -> false`
- `('12.') -> false`
- `('9'.repeat(500)+'.'+'5'.repeat(499)) -> true`
- `('-'.repeat(1000)) -> false`
- `('1.5\u0000') -> false`
- `(['12','5'].join('.')) -> true`
- `(12.5) -> TypeError`
- `(null) -> TypeError`
- `(undefined) -> TypeError`
- `(new String('1.5')) -> TypeError`
- `('1'.repeat(1001)) -> RangeError`

Only edit is_decimal_number.mjs and optional IMPLEMENTATION.md in this task directory.
Quick run from the repository root (Node 22):
`node tasks/is-decimal-number/check.mjs --solution "$PWD/tasks/is-decimal-number/is_decimal_number.mjs"`
The issue supplies a separate trusted checker pin and offline Docker command.
A pass remains CHECK_PASS_UNVERIFIED until independent source/scope review.
