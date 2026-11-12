use longest_char_run::longest_char_run;
#[test]
fn spec_cases() {
assert_eq!(longest_char_run(""),0usize,"''");
assert_eq!(longest_char_run("a"),1usize,"'a'");
assert_eq!(longest_char_run("aa"),2usize,"'aa'");
assert_eq!(longest_char_run("ab"),1usize,"'ab'");
assert_eq!(longest_char_run("aab"),2usize,"'aab'");
assert_eq!(longest_char_run("abb"),2usize,"'abb'");
assert_eq!(longest_char_run("abba"),2usize,"'abba'");
assert_eq!(longest_char_run("aaabbbbcc"),4usize,"'aaabbbbcc'");
assert_eq!(longest_char_run("aA"),1usize,"'aA'");
assert_eq!(longest_char_run("aAaA"),1usize,"'aAaA'");
assert_eq!(longest_char_run("a a"),1usize,"'a a'");
assert_eq!(longest_char_run("  x"),2usize,"'  x'");
assert_eq!(longest_char_run("x  "),2usize,"'x  '");
assert_eq!(longest_char_run(" xx "),2usize,"' xx '");
assert_eq!(longest_char_run("\t\t\t"),3usize,"'\\t\\t\\t'");
assert_eq!(longest_char_run("\n\n"),2usize,"'\\n\\n'");
assert_eq!(longest_char_run("éé"),2usize,"'éé'");
assert_eq!(longest_char_run("e\u{301}\u{301}"),2usize,"'e\u{301}\u{301}'");
assert_eq!(longest_char_run("日日本"),2usize,"'日日本'");
assert_eq!(longest_char_run("🚀🚀x"),2usize,"'🚀🚀x'");
assert_eq!(longest_char_run("11"),2usize,"'11'");
assert_eq!(longest_char_run("1122233"),3usize,"'1122233'");
assert_eq!(longest_char_run("mississippi"),2usize,"'mississippi'");
assert_eq!(longest_char_run("aaaa"),4usize,"'aaaa'");
assert_eq!(longest_char_run("abcabc"),1usize,"'abcabc'");
assert_eq!(longest_char_run("zz\n"),2usize,"'zz\\n'");
assert_eq!(longest_char_run("q\u{a0}\u{a0}q"),2usize,"'q\\xa0\\xa0q'");
assert_eq!(longest_char_run("AAa"),2usize,"'AAa'");
assert_eq!(longest_char_run("ab\u{0}\u{0}\u{0}"),3usize,"'ab\\x00\\x00\\x00'");
assert_eq!(longest_char_run("Hello"),2usize,"'Hello'");
let alternating="ab".repeat(5000);assert_eq!(longest_char_run(&alternating),1);
let middle=format!("x{}y","z".repeat(3000));assert_eq!(longest_char_run(&middle),3000);
let long="q".repeat(10000);assert_eq!(longest_char_run(&long),10000);
let wide="\u{65e5}".repeat(2000);assert_eq!(longest_char_run(&wide),2000);
let late=format!("{}{}","ab".repeat(100),"c".repeat(300));assert_eq!(longest_char_run(&late),300);
for _ in 0..3 {assert_eq!(longest_char_run("pin-4444-pin"),4);}
}
