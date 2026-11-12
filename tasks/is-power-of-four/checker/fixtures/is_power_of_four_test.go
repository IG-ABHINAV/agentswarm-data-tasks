package ispoweroffour
import "testing"
var _ func(uint64) bool = IsPowerOfFour
func TestSpec(t *testing.T) {
cases:=[]struct{in uint64;want bool}{
{0,false},
{1,true},
{2,false},
{3,false},
{4,true},
{5,false},
{7,false},
{8,false},
{10,false},
{13,false},
{12,false},
{15,false},
{16,true},
{17,false},
{32,false},
{48,false},
{63,false},
{64,true},
{65,false},
{128,false},
{256,true},
{1024,true},
{4096,true},
{65536,true},
{2147483648,false},
{4294967296,true},
{8589934592,false},
{1099511627776,true},
{4611686018427387904,true},
{9223372036854775808,false},
{18446744073709551615,false},
{4611686018427387903,false},
{4611686018427387905,false},
{5368709120,false},
{6148914691236517205,false},
{12297829382473034410,false},
{3145728,false},
{123456789,false},
}
for _,c:=range cases { if got:=IsPowerOfFour(c.in);got!=c.want {t.Errorf("%d (%016x): got %v want %v",c.in,c.in,got,c.want)};if IsPowerOfFour(c.in)!=c.want {t.Fatal("nondeterministic")} }
for k:=uint(0);k<64;k++ { want:=k%2==0; if got:=IsPowerOfFour(uint64(1)<<k);got!=want {t.Errorf("1<<%d: got %v want %v",k,got,want)} }
for k:=uint(2);k<64;k++ { n:=uint64(1)<<k; if IsPowerOfFour(n-1) || IsPowerOfFour(n+1) || IsPowerOfFour(n|1) {t.Errorf("neighbour of 1<<%d reported as a power of four",k)} }
}
