# Validate a hex color string

Implement export function isHexColor(text) in is_hex_color.mjs,
Node 22 standard library only.

text must be a primitive string; boxed String objects (also subclasses),
numbers, missing arguments and all other values raise exact TypeError. Check
the type before the length. Then a string longer than 1000 UTF-16 code units
(its .length) raises exact RangeError.

Return the primitive boolean true when text is a hex color, otherwise false.
A hex color is a "#" followed by exactly three or exactly six ASCII hex
digits (0-9, a-f, A-F; upper and lower case can be mixed). Nothing else is
accepted: no missing "#", no four, five, seven or eight digits, no spaces,
trailing newline or trimming, no letters after f and no non-ASCII digits.
"#fff", "#000000" and "#1a2B3c" are true; "fff", "#ffff", "#ggg" and "" are
false.

Error messages are unconstrained. Keep no state between calls; repeated and
independent calls return the same result.

Examples (arguments -> result); every one is checked:
- `('#fff') -> true`
- `('#FFF') -> true`
- `('#000000') -> true`
- `('#1a2B3c') -> true`
- `('#abc') -> true`
- `('#ABCDEF') -> true`
- `('fff') -> false`
- `('#ff') -> false`
- `('#ffff') -> false`
- `('#fffff') -> false`
- `('#fffffff') -> false`
- `('#ffffffff') -> false`
- `('#ggg') -> false`
- `('#12345g') -> false`
- `('') -> false`
- `('#') -> false`
- `(' #fff') -> false`
- `('#fff ') -> false`
- `('#fff\n') -> false`
- `('##fff') -> false`
- `('#\uff10\uff10\uff10') -> false`
- `('#0x0') -> false`
- `('#-12') -> false`
- `('#1a2b3c4d') -> false`
- `('#AbC') -> true`
- `('#'+'f'.repeat(6)) -> true`
- `('#'.repeat(1000)) -> false`
- `('#fff\u0000') -> false`
- `('#\u0660\u0660\u0660') -> false`
- `(1) -> TypeError`
- `(null) -> TypeError`
- `(0xfff) -> TypeError`
- `(new String('#fff')) -> TypeError`
- `('#'.repeat(1001)) -> RangeError`

Only edit is_hex_color.mjs and optional IMPLEMENTATION.md in this task directory.
Quick run from the repository root (Node 22):
`node tasks/is-hex-color/check.mjs --solution "$PWD/tasks/is-hex-color/is_hex_color.mjs"`
The issue supplies a separate trusted checker pin and offline Docker command.
A pass remains CHECK_PASS_UNVERIFIED until independent source/scope review.
