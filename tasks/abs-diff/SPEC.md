# Return the exact distance between two int64 values

Implement `AbsDiff(a, b int64) uint64` in package `absdiff`, file
`abs_diff.go`. Use Go 1.23 standard library only. The supplied go.mod has no
external modules. Only edit abs_diff.go and optional IMPLEMENTATION.md in this
task. Do not change the checker, module, fixtures or specification. No file,
clock or network access.

Return the exact absolute difference |a - b| as a uint64. Every pair of int64
values is valid, including math.MinInt64 (-9223372036854775808) and
math.MaxInt64 (9223372036854775807); the largest possible distance,
18446744073709551615, still fits in a uint64. Never overflow or wrap around
the way plain int64 subtraction does, and never cap the result. The result
does not depend on the argument order. Use exact integer arithmetic (no
floating point).

Examples: |0 - 0| -> 0; |1 - 2| -> 1; |5 - -3| -> 8; |-3 - 5| -> 8;
|9223372036854775807 - -9223372036854775808| -> 18446744073709551615;
|-9223372036854775808 - 9223372036854775807| -> 18446744073709551615;
|-1 - 9223372036854775807| -> 9223372036854775808.

The checker is Go code that copies only the candidate into an isolated temporary
module and compiles and runs trusted tests. Preload the digest-pinned golang
Docker image shown in the issue. Acceptance runs with --network none,
GOPROXY=off and GOSUMDB=off; no dependencies are downloaded. A cold Go build
may take about a minute. A pass remains CHECK_PASS_UNVERIFIED until independent
source/scope review.
