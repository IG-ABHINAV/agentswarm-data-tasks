package swaphalves
import "testing"
var _ func(uint32) uint32 = SwapHalves
func TestSpec(t *testing.T) {
cases:=[]struct{in uint32;want uint32}{
{0,0},
{1,65536},
{2,131072},
{255,16711680},
{256,16777216},
{65535,4294901760},
{65536,1},
{32768,2147483648},
{2147483648,32768},
{4294967295,4294967295},
{4294901760,65535},
{65535,4294901760},
{16711935,16711935},
{4278255360,4278255360},
{252645135,252645135},
{305419896,1450709556},
{3735928559,3203391149},
{65537,65537},
{2147483647,4294934527},
{4294967294,4294901759},
{43261596,513540756},
{305419896,1450709556},
{1450709556,305419896},
{123456789,3440707419},
{987654321,1756445406},
{3000000000,1577104080},
{2147483649,98304},
{65535,4294901760},
{65537,65537},
}
for _,c:=range cases { if got:=SwapHalves(c.in);got!=c.want {t.Errorf("%d (%08x): got %08x want %08x",c.in,c.in,got,c.want)};if SwapHalves(c.in)!=c.want {t.Fatal("nondeterministic")} }
for k:=uint(0);k<32;k++ { if got:=SwapHalves(uint32(1)<<k);got!=uint32(1)<<((k+16)%32) {t.Errorf("1<<%d: got %032b",k,got)} }
for _,n:=range []uint32{0,1,7,43261596,0xdeadbeef,4294967295,2147483648} { if got:=SwapHalves(SwapHalves(n));got!=n {t.Errorf("swapping twice changed %d: %d",n,got)} }
}
