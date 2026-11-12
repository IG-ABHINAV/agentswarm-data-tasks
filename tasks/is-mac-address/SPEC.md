# Validate a MAC address string

Implement export function isMacAddress(text) in is_mac_address.mjs,
Node 22 standard library only.

text must be a primitive string; boxed String objects (also subclasses),
numbers, missing arguments and all other values raise exact TypeError. Check
the type before the length. Then a string longer than 1000 UTF-16 code units
(its .length) raises exact RangeError.

Return the primitive boolean true when text is a MAC address, otherwise
false. A MAC address is exactly six groups of exactly two ASCII hex digits
(0-9, a-f, A-F; upper and lower case can be mixed) separated by five
separators that are all ":" or all "-" (never mixed). Nothing else is
accepted: no other separators or missing separators, no five or seven groups,
no one- or three-digit groups, no spaces, trailing newline or trimming and no
non-ASCII digits. "00:1a:2b:3c:4d:5e" and "00-1A-2B-3C-4D-5E" are true;
"00:1a-2b:3c:4d:5e", "001a2b3c4d5e", "00:1a:2b:3c:4d" and "" are false.

Error messages are unconstrained. Keep no state between calls; repeated and
independent calls return the same result.

Examples (arguments -> result); every one is checked:
- `('00:1a:2b:3c:4d:5e') -> true`
- `('00-1A-2B-3C-4D-5E') -> true`
- `('FF:FF:FF:FF:FF:FF') -> true`
- `('aA:bB:cC:dD:eE:fF') -> true`
- `('00:00:00:00:00:00') -> true`
- `('00:1a:2b:3c:4d') -> false`
- `('00:1a:2b:3c:4d:5e:6f') -> false`
- `('00:1a-2b:3c:4d:5e') -> false`
- `('00-1a-2b-3c-4d:5e') -> false`
- `('001a2b3c4d5e') -> false`
- `('00.1a.2b.3c.4d.5e') -> false`
- `('0:1a:2b:3c:4d:5e') -> false`
- `('000:1a:2b:3c:4d:5e') -> false`
- `('00:1a:2b:3c:4d:5g') -> false`
- `('') -> false`
- `('00:1a:2b:3c:4d:5e ') -> false`
- `(' 00:1a:2b:3c:4d:5e') -> false`
- `('00:1a:2b:3c:4d:5e\n') -> false`
- `('00::1a:2b:3c:4d:5e') -> false`
- `('00 1a 2b 3c 4d 5e') -> false`
- `('\uff10\uff10:1a:2b:3c:4d:5e') -> false`
- `('0x:1a:2b:3c:4d:5e') -> false`
- `('00:1A:2b:3C:4d:5E') -> true`
- `('12-34-56-78-9a-bc') -> true`
- `('00:'.repeat(5)+'00') -> true`
- `('00:'.repeat(333)) -> false`
- `('00:1a:2b:3c:4d:5e\u0000') -> false`
- `(['ab','cd','ef','01','23','45'].join('-')) -> true`
- `(1) -> TypeError`
- `(null) -> TypeError`
- `(0x001a2b3c4d5e) -> TypeError`
- `(new String('00:1a:2b:3c:4d:5e')) -> TypeError`
- `('0'.repeat(1001)) -> RangeError`

Only edit is_mac_address.mjs and optional IMPLEMENTATION.md in this task directory.
Quick run from the repository root (Node 22):
`node tasks/is-mac-address/check.mjs --solution "$PWD/tasks/is-mac-address/is_mac_address.mjs"`
The issue supplies a separate trusted checker pin and offline Docker command.
A pass remains CHECK_PASS_UNVERIFIED until independent source/scope review.
