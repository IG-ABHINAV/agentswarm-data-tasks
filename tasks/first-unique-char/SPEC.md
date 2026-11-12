# Find the first character that appears only once

Implement `pub fn first_unique_char(input: &str) -> Option<char>` in
`src/lib.rs` (crate `first-unique-char`). Rust 2021, standard library only,
no crates. Only edit src/lib.rs and optional IMPLEMENTATION.md in this task.
Do not change the checker, Cargo.toml, fixtures or this specification.

Treat the input as a sequence of `char`s (Unicode scalar values, not bytes).
Return `Some(c)` for the leftmost char `c` that occurs exactly once in the
whole input. For "swiss" that is 'w' ('s' occurs three times). Return `None`
when every char occurs at least twice, including for the empty string.
Comparison is exact: there is no case folding ('a' and 'A' are different), no
trimming and no normalization. Every char counts, including spaces, tabs,
newlines, punctuation, digits, combining marks and emoji. Any input length
must work without panic.

Examples (input -> result):
- `"swiss"` -> `Some("w")`
- `"abab"` -> `None`
- `"abc"` -> `Some("a")`
- `""` -> `None`
- `"aA"` -> `Some("a")`
- `"a b c"` -> `Some("a")`
- `"日本日"` -> `Some("本")`
- `"🚀x🚀"` -> `Some("x")`

The checker copies only src/lib.rs into a fresh temporary crate and runs
trusted integration tests with `cargo test --offline`. Preload the
digest-pinned rust Docker image shown in the issue; acceptance runs with
--network none. A cold build may take about a minute. A pass remains
CHECK_PASS_UNVERIFIED until independent source/scope review.
