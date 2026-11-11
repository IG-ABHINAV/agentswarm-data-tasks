package main
import ("flag"; "fmt"; "os"; "os/exec"; "path/filepath"; "runtime")
func main() {
    source := flag.String("solution", "", "candidate swap_halves.go"); flag.Parse()
    if *source == "" { panic("--solution required") }
    _, own, _, _ := runtime.Caller(0)
    root, err := os.MkdirTemp("", "swap-halves-check-"); if err != nil { panic(err) }; defer os.RemoveAll(root)
    for name, src := range map[string]string{"swap_halves.go":*source,"swap_halves_test.go":filepath.Join(filepath.Dir(own),"fixtures","swap_halves_test.go")} {
        data, err := os.ReadFile(src); if err != nil { panic(err) }
        if err=os.WriteFile(filepath.Join(root,name),data,0600); err != nil { panic(err) }
    }
    if err=os.WriteFile(filepath.Join(root,"go.mod"),[]byte("module swaphalves\n\ngo 1.23\n"),0600); err != nil { panic(err) }
    cmd:=exec.Command("go","test","-count=1","-timeout=10s","-v",".");cmd.Dir=root;cmd.Stdout=os.Stdout;cmd.Stderr=os.Stderr
    if err=cmd.Run();err!=nil { panic(err) }
    fmt.Println("PASS swap-halves: trusted compiled cases and single-bit probes")
}
