# Validate a dotted-decimal IPv4 address

Implement export function isIpv4(text) in is_ipv4.mjs,
Node 22 standard library only.

text must be a primitive string; boxed String objects (also subclasses),
numbers, missing arguments and all other values raise exact TypeError. Check
the type before the length. Then a string longer than 1000 UTF-16 code units
(its .length) raises exact RangeError.

Return the primitive boolean true when text is a dotted-decimal IPv4 address,
otherwise false. Valid means exactly four parts separated by single "."
characters. Each part is 1 to 3 ASCII digits 0-9 with a value from 0 to 255
and no leading zero (only "0" itself may start with 0). Nothing else is
accepted: no empty parts, signs, spaces, trailing newline or trimming, hex,
exponents, non-ASCII digits or suffixes such as "/24". "0.0.0.0",
"127.0.0.1" and "255.255.255.255" are true; "256.0.0.1", "1.2.3",
"01.2.3.4", "1..2.3" and "" are false.

Error messages are unconstrained. Keep no state between calls; repeated and
independent calls return the same result.

Examples (arguments -> result); every one is checked:
- `('0.0.0.0') -> true`
- `('127.0.0.1') -> true`
- `('192.168.1.1') -> true`
- `('255.255.255.255') -> true`
- `('256.0.0.1') -> false`
- `('1.2.3') -> false`
- `('1.2.3.4.5') -> false`
- `('01.2.3.4') -> false`
- `('1.2.3.04') -> false`
- `('00.0.0.0') -> false`
- `('1..2.3') -> false`
- `('.1.2.3') -> false`
- `('1.2.3.') -> false`
- `('') -> false`
- `('1.2.3.4 ') -> false`
- `(' 1.2.3.4') -> false`
- `('1.2.3.a') -> false`
- `('1.2.3.-4') -> false`
- `('1.2.3.+4') -> false`
- `('1.2.3.1e2') -> false`
- `('10.0.0.255') -> true`
- `('10.0.0.300') -> false`
- `('999.1.1.1') -> false`
- `('1.2.3.4\n') -> false`
- `('\u0661.2.3.4') -> false`
- `('1.2.3.0x1') -> false`
- `('100.200.250.199') -> true`
- `('1.2.3.4/24') -> false`
- `('1.2.3.4'.repeat(2)) -> false`
- `('1.'.repeat(500)) -> false`
- `('1.2.3.4\u0000') -> false`
- `(['1','2','3','4'].join('.')) -> true`
- `(1) -> TypeError`
- `(null) -> TypeError`
- `(16909060) -> TypeError`
- `(new String('1.2.3.4')) -> TypeError`
- `('1'.repeat(1001)) -> RangeError`

Only edit is_ipv4.mjs and optional IMPLEMENTATION.md in this task directory.
Quick run from the repository root (Node 22):
`node tasks/is-ipv4/check.mjs --solution "$PWD/tasks/is-ipv4/is_ipv4.mjs"`
The issue supplies a separate trusted checker pin and offline Docker command.
A pass remains CHECK_PASS_UNVERIFIED until independent source/scope review.
