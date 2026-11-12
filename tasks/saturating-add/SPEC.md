# Add two uint64 values without wrapping around

Implement `SaturatingAdd(a, b uint64) uint64` in package `saturatingadd`, file
`saturating_add.go`. Use Go 1.23 standard library only. The supplied go.mod
has no external modules. Only edit saturating_add.go and optional
IMPLEMENTATION.md in this task. Do not change the checker, module, fixtures or
specification. No file, clock or network access.

Return a + b when the exact sum fits in a uint64 (at most
18446744073709551615, math.MaxUint64). When the exact sum is larger, return
18446744073709551615 instead; never wrap around to a small number the way
plain uint64 addition does. Every pair of uint64 values is valid. The result
does not depend on the argument order. Use exact integer arithmetic (no
floating point).

Examples: 0 + 0 -> 0; 1 + 2 -> 3; 18446744073709551614 + 1 ->
18446744073709551615; 18446744073709551615 + 1 -> 18446744073709551615;
9223372036854775808 + 9223372036854775807 -> 18446744073709551615;
9223372036854775808 + 9223372036854775808 -> 18446744073709551615;
18446744073709551615 + 18446744073709551615 -> 18446744073709551615.

The checker is Go code that copies only the candidate into an isolated temporary
module and compiles and runs trusted tests. Preload the digest-pinned golang
Docker image shown in the issue. Acceptance runs with --network none,
GOPROXY=off and GOSUMDB=off; no dependencies are downloaded. A cold Go build
may take about a minute. A pass remains CHECK_PASS_UNVERIFIED until independent
source/scope review.
