use double_chars::double_chars;
#[test]
fn spec_cases() {
assert_eq!(double_chars(""),"","''");
assert_eq!(double_chars("a"),"aa","'a'");
assert_eq!(double_chars("ab"),"aabb","'ab'");
assert_eq!(double_chars("aa"),"aaaa","'aa'");
assert_eq!(double_chars("abc"),"aabbcc","'abc'");
assert_eq!(double_chars("a b"),"aa  bb","'a b'");
assert_eq!(double_chars("Hello, World!"),"HHeelllloo,,  WWoorrlldd!!","'Hello, World!'");
assert_eq!(double_chars("  x  "),"    xx    ","'  x  '");
assert_eq!(double_chars("\t\n"),"\t\t\n\n","'\\t\\n'");
assert_eq!(double_chars("é"),"éé","'é'");
assert_eq!(double_chars("e\u{301}"),"ee\u{301}\u{301}","'e\u{301}'");
assert_eq!(double_chars("🚀"),"🚀🚀","'🚀'");
assert_eq!(double_chars("🚀!"),"🚀🚀!!","'🚀!'");
assert_eq!(double_chars("日本"),"日日本本","'日本'");
assert_eq!(double_chars("a-b_c"),"aa--bb__cc","'a-b_c'");
assert_eq!(double_chars("1234"),"11223344","'1234'");
assert_eq!(double_chars("\u{0}"),"\u{0}\u{0}","'\\x00'");
assert_eq!(double_chars("ß"),"ßß","'ß'");
assert_eq!(double_chars("ǅ"),"ǅǅ","'ǅ'");
assert_eq!(double_chars("\u{a0}"),"\u{a0}\u{a0}","'\\xa0'");
assert_eq!(double_chars("#"),"##","'#'");
assert_eq!(double_chars("xyz\r\n"),"xxyyzz\r\r\n\n","'xyz\\r\\n'");
let long="7".repeat(5000);assert_eq!(double_chars(&long),"7".repeat(10000));
let rockets="\u{1F680}".repeat(1000);assert_eq!(double_chars(&rockets),"\u{1F680}".repeat(2000));
for _ in 0..3 {assert_eq!(double_chars("pin-42"),"ppiinn--4422");}
}
