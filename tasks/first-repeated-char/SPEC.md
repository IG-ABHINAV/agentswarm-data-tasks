# Find the first repeated character

Implement `pub fn first_repeated_char(input: &str) -> Option<char>` in
`src/lib.rs` (crate `first-repeated-char`). Rust 2021, standard library only,
no crates. Only edit src/lib.rs and optional IMPLEMENTATION.md in this task.
Do not change the checker, Cargo.toml, fixtures or this specification.

Treat the input as a sequence of `char`s (Unicode scalar values, not bytes).
Read it from left to right and return `Some(c)` for the first char `c` that
has already appeared earlier in the input, that is the char whose second
occurrence comes first. For "abba" that is 'b' (the second 'b' comes before
the second 'a'). Return `None` when every char is distinct, including for the
empty string. Comparison is exact: there is no case folding ('a' and 'A' are
different), no trimming and no normalization. Every char counts, including
spaces, tabs, newlines, punctuation, digits, combining marks and emoji. Any
input length must work without panic.

Examples (input -> result):
- `"abca"` -> `Some("a")`
- `"abba"` -> `Some("b")`
- `"abc"` -> `None`
- `""` -> `None`
- `"aA"` -> `None`
- `"a b c"` -> `Some(" ")`
- `"日本日"` -> `Some("日")`
- `"🚀x🚀"` -> `Some("🚀")`

The checker copies only src/lib.rs into a fresh temporary crate and runs
trusted integration tests with `cargo test --offline`. Preload the
digest-pinned rust Docker image shown in the issue; acceptance runs with
--network none. A cold build may take about a minute. A pass remains
CHECK_PASS_UNVERIFIED until independent source/scope review.
