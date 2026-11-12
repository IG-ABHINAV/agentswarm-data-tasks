# Repeat every character twice

Implement `pub fn double_chars(input: &str) -> String` in `src/lib.rs`
(crate `double-chars`). Rust 2021, standard library only, no crates. Only
edit src/lib.rs and optional IMPLEMENTATION.md in this task. Do not change
the checker, Cargo.toml, fixtures or this specification.

Treat the input as a sequence of `char`s (Unicode scalar values, not bytes).
Return a new string in which every char of the input appears twice in a row,
in the original order, so the result has exactly twice as many chars as the
input. Every char is doubled the same way, including spaces, tabs, newlines,
punctuation, digits, combining marks, emoji and characters that are already
repeated. There is no trimming, case change or normalization. The empty
string returns the empty string. Any input length must work without panic.

Examples (input -> result):
- `"abc"` -> `"aabbcc"`
- `""` -> `""`
- `"a b"` -> `"aa  bb"`
- `"aa"` -> `"aaaa"`
- `"🚀!"` -> `"🚀🚀!!"`
- `"é"` -> `"éé"`
- `"é"` -> `"eé́"`

The checker copies only src/lib.rs into a fresh temporary crate and runs
trusted integration tests with `cargo test --offline`. Preload the
digest-pinned rust Docker image shown in the issue; acceptance runs with
--network none. A cold build may take about a minute. A pass remains
CHECK_PASS_UNVERIFIED until independent source/scope review.
