# Return the length of the longest run of one repeated character

Implement `pub fn longest_char_run(input: &str) -> usize` in `src/lib.rs`
(crate `longest-char-run`). Rust 2021, standard library only, no crates. Only
edit src/lib.rs and optional IMPLEMENTATION.md in this task. Do not change the
checker, Cargo.toml, fixtures or this specification.

Treat the input as a sequence of `char`s (Unicode scalar values, not bytes).
A run is a maximal block of neighbouring equal chars. Return the length (in
chars) of the longest run; for "aaabbbbcc" that is 4. Return 0 for the empty
string and 1 when no two neighbouring chars are equal. Comparison is exact:
there is no case folding ('a' and 'A' are different), no trimming and no
normalization. Every char counts, including spaces, tabs, newlines,
punctuation, digits, combining marks and emoji. Any input length must work
without panic, and runs may be longer than 255.

Examples (input -> result):
- `""` -> `0`
- `"a"` -> `1`
- `"aab"` -> `2`
- `"aaabbbbcc"` -> `4`
- `"aA"` -> `1`
- `"a a"` -> `1`
- `"日日本"` -> `2`
- `"🚀🚀x"` -> `2`

The checker copies only src/lib.rs into a fresh temporary crate and runs
trusted integration tests with `cargo test --offline`. Preload the
digest-pinned rust Docker image shown in the issue; acceptance runs with
--network none. A cold build may take about a minute. A pass remains
CHECK_PASS_UNVERIFIED until independent source/scope review.
