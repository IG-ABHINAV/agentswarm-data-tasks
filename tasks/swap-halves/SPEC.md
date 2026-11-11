# Swap the 16-bit halves of a uint32

Implement `SwapHalves(n uint32) uint32` in package `swaphalves`, file
`swap_halves.go`. Use Go 1.23 standard library only. The supplied go.mod has
no external modules. Only edit swap_halves.go and optional IMPLEMENTATION.md
in this task. Do not change the checker, module, fixtures or specification. No
file, clock or network access.

Write n as exactly 32 binary digits. Its high half is the top 16 bits (bits
16-31) and its low half is the bottom 16 bits (bits 0-15). Return the uint32
whose high half is the low half of n and whose low half is the high half of
n; the order of bits inside each half stays the same. Every uint32 value from
0 to 4294967295 is valid. Swapping twice gives back the original value. Do
not reverse bits or bytes, and do not rotate by any amount other than 16 bits.

Examples: 0 -> 0; 1 -> 65536; 65536 -> 1; 65535 -> 4294901760;
4294967295 -> 4294967295; 2147483648 -> 32768;
305419896 (0x12345678) -> 1450709556 (0x56781234).

The checker is Go code that copies only the candidate into an isolated temporary
module and compiles and runs trusted tests. Preload the digest-pinned golang
Docker image shown in the issue. Acceptance runs with --network none,
GOPROXY=off and GOSUMDB=off; no dependencies are downloaded. A cold Go build
may take about a minute. A pass remains CHECK_PASS_UNVERIFIED until independent
source/scope review.
