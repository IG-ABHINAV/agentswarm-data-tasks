# Return the floor midpoint of two int64 values

Implement `Midpoint(a, b int64) int64` in package `intmidpoint`, file
`int_midpoint.go`. Use Go 1.23 standard library only. The supplied go.mod has
no external modules. Only edit int_midpoint.go and optional IMPLEMENTATION.md
in this task. Do not change the checker, module, fixtures or specification.
No file, clock or network access.

Return the exact average (a + b) / 2 rounded down toward negative infinity
(the floor), as an int64. The result always fits in an int64. Every pair of
int64 values is valid, including math.MinInt64 (-9223372036854775808) and
math.MaxInt64 (9223372036854775807). Never overflow or wrap around the way
plain int64 addition does, and do not round toward zero: the midpoint of -1
and 0 is -1. The result does not depend on the argument order. Use exact
integer arithmetic (no floating point).

Examples: Midpoint(0, 0) -> 0; Midpoint(1, 2) -> 1; Midpoint(1, 3) -> 2;
Midpoint(-1, 0) -> -1; Midpoint(-3, -3) -> -3;
Midpoint(9223372036854775807, 9223372036854775807) -> 9223372036854775807;
Midpoint(-9223372036854775808, 9223372036854775807) -> -1;
Midpoint(-9223372036854775808, -9223372036854775808) -> -9223372036854775808.

The checker is Go code that copies only the candidate into an isolated temporary
module and compiles and runs trusted tests. Preload the digest-pinned golang
Docker image shown in the issue. Acceptance runs with --network none,
GOPROXY=off and GOSUMDB=off; no dependencies are downloaded. A cold Go build
may take about a minute. A pass remains CHECK_PASS_UNVERIFIED until independent
source/scope review.
