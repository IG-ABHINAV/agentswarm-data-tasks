# Validate a lowercase hyphenated URL slug string

Implement export function isUrlSlug(text) in is_url_slug.mjs,
Node 22 standard library only.

text must be a primitive string; boxed String objects (also subclasses),
numbers, missing arguments and all other values raise exact TypeError. Check
the type before the length. Then a string longer than 1000 UTF-16 code units
(its .length) raises exact RangeError.

Return the primitive boolean true when text is a URL slug, otherwise false:
one or more words separated by single "-" characters, where each word is one
or more lowercase ASCII letters a-z or ASCII digits 0-9. Nothing else is
accepted: no empty string, no uppercase letters, no leading, trailing or
doubled hyphens, no underscores, dots, slashes or spaces, no surrounding
spaces, trailing newline or trimming and no non-ASCII letters or digits.
"hello", "hello-world", "a1-b2-c3" and "2024-recap" are true; "Hello",
"hello_world", "hello--world", "-hello", "hello-" and "" are false.

Error messages are unconstrained. Keep no state between calls; repeated and
independent calls return the same result.

Examples (arguments -> result); every one is checked:
- `('hello') -> true`
- `('hello-world') -> true`
- `('a1-b2-c3') -> true`
- `('2024-recap') -> true`
- `('x') -> true`
- `('a') -> true`
- `('0') -> true`
- `('abc123') -> true`
- `('my-first-post') -> true`
- `('') -> false`
- `('Hello') -> false`
- `('HELLO') -> false`
- `('hello_world') -> false`
- `('hello--world') -> false`
- `('-hello') -> false`
- `('hello-') -> false`
- `('-') -> false`
- `('hello world') -> false`
- `('h\u00e9llo') -> false`
- `('hello.world') -> false`
- `('hello/world') -> false`
- `(' hello') -> false`
- `('hello ') -> false`
- `('hello\n') -> false`
- `('caf\u00e9') -> false`
- `('a--b') -> false`
- `('ab-') -> false`
- `('A-b') -> false`
- `('post-\u0661') -> false`
- `('\u017fh') -> false`
- `('hello-World') -> false`
- `('\uff41bc') -> false`
- `('a'.repeat(1000)) -> true`
- `('-'.repeat(1000)) -> false`
- `('ab\u0000') -> false`
- `(['ab','cd'].join('-')) -> true`
- `(42) -> TypeError`
- `(null) -> TypeError`
- `(undefined) -> TypeError`
- `(new String('ab')) -> TypeError`
- `('a'.repeat(1001)) -> RangeError`

Only edit is_url_slug.mjs and optional IMPLEMENTATION.md in this task directory.
Quick run from the repository root (Node 22):
`node tasks/is-url-slug/check.mjs --solution "$PWD/tasks/is-url-slug/is_url_slug.mjs"`
The issue supplies a separate trusted checker pin and offline Docker command.
A pass remains CHECK_PASS_UNVERIFIED until independent source/scope review.
