# Decide whether a uint64 is a power of four

Implement `IsPowerOfFour(n uint64) bool` in package `ispoweroffour`, file
`is_power_of_four.go`. Use Go 1.23 standard library only. The supplied go.mod
has no external modules. Only edit is_power_of_four.go and optional
IMPLEMENTATION.md in this task. Do not change the checker, module, fixtures or
specification. No file, clock or network access.

Return true exactly when n == 4^k for some integer k >= 0, otherwise false.
The powers of four that fit in a uint64 are 1, 4, 16, 64, ... up to 4^31
(4611686018427387904). 0 is not a power of four, 1 (4^0) is. Powers of two
that are not powers of four (2, 8, 32, ..., 2^63) are false. Every uint64
value from 0 to 18446744073709551615 is valid. Use exact integer arithmetic
(no floating point).

Examples: 0 -> false; 1 -> true; 2 -> false; 4 -> true; 8 -> false;
16 -> true; 64 -> true; 4611686018427387904 -> true;
9223372036854775808 -> false; 18446744073709551615 -> false.

The checker is Go code that copies only the candidate into an isolated temporary
module and compiles and runs trusted tests. Preload the digest-pinned golang
Docker image shown in the issue. Acceptance runs with --network none,
GOPROXY=off and GOSUMDB=off; no dependencies are downloaded. A cold Go build
may take about a minute. A pass remains CHECK_PASS_UNVERIFIED until independent
source/scope review.
