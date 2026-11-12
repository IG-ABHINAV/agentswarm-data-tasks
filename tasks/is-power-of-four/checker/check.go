package main
import ("flag"; "fmt"; "os"; "os/exec"; "path/filepath"; "runtime")
func main() {
    source := flag.String("solution", "", "candidate is_power_of_four.go"); flag.Parse()
    if *source == "" { panic("--solution required") }
    _, own, _, _ := runtime.Caller(0)
    root, err := os.MkdirTemp("", "is-power-of-four-check-"); if err != nil { panic(err) }; defer os.RemoveAll(root)
    for name, src := range map[string]string{"is_power_of_four.go":*source,"is_power_of_four_test.go":filepath.Join(filepath.Dir(own),"fixtures","is_power_of_four_test.go")} {
        data, err := os.ReadFile(src); if err != nil { panic(err) }
        if err=os.WriteFile(filepath.Join(root,name),data,0600); err != nil { panic(err) }
    }
    if err=os.WriteFile(filepath.Join(root,"go.mod"),[]byte("module ispoweroffour\n\ngo 1.23\n"),0600); err != nil { panic(err) }
    cmd:=exec.Command("go","test","-count=1","-timeout=10s","-v",".");cmd.Dir=root;cmd.Stdout=os.Stdout;cmd.Stderr=os.Stderr
    if err=cmd.Run();err!=nil { panic(err) }
    fmt.Println("PASS is-power-of-four: trusted compiled cases and single-bit probes")
}
