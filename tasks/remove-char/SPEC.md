# Remove every occurrence of a character

Implement `pub fn remove_char(input: &str, target: char) -> String` in
`src/lib.rs` (crate `remove-char`). Rust 2021, standard library only, no
crates. Only edit src/lib.rs and optional IMPLEMENTATION.md in this task. Do
not change the checker, Cargo.toml, fixtures or this specification.

Treat the input as a sequence of `char`s (Unicode scalar values, not bytes).
Return a new string holding every char of the input that is not equal to
`target`, in the original order. Remove every occurrence, not only the first.
Comparison is exact: there is no case folding ('h' does not remove 'H'), no
trimming and no normalization, so removing a combining mark leaves the base
letter and removing 'e' leaves a following combining mark. Every other char,
including spaces, tabs, newlines, punctuation, digits and emoji, is kept. The
empty string returns the empty string. Any input length must work without
panic.

Examples (input, target -> result):
- `"banana"`, `"a"` -> `"bnn"`
- `"abc"`, `"x"` -> `"abc"`
- `""`, `"a"` -> `""`
- `"aaa"`, `"a"` -> `""`
- `"a b c"`, `" "` -> `"abc"`
- `"Hello"`, `"h"` -> `"Hello"`
- `"🚀a🚀"`, `"🚀"` -> `"a"`
- `"café"`, `"́"` -> `"cafe"`

The checker copies only src/lib.rs into a fresh temporary crate and runs
trusted integration tests with `cargo test --offline`. Preload the
digest-pinned rust Docker image shown in the issue; acceptance runs with
--network none. A cold build may take about a minute. A pass remains
CHECK_PASS_UNVERIFIED until independent source/scope review.
