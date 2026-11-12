use remove_char::remove_char;
#[test]
fn spec_cases() {
assert_eq!(remove_char("",'a'),"","('', 'a')");
assert_eq!(remove_char("a",'a'),"","('a', 'a')");
assert_eq!(remove_char("b",'a'),"b","('b', 'a')");
assert_eq!(remove_char("banana",'a'),"bnn","('banana', 'a')");
assert_eq!(remove_char("aaa",'a'),"","('aaa', 'a')");
assert_eq!(remove_char("abc",'x'),"abc","('abc', 'x')");
assert_eq!(remove_char("a b c",' '),"abc","('a b c', ' ')");
assert_eq!(remove_char("Hello, World!",'l'),"Heo, Word!","('Hello, World!', 'l')");
assert_eq!(remove_char("Hello",'h'),"Hello","('Hello', 'h')");
assert_eq!(remove_char("HELLO",'l'),"HELLO","('HELLO', 'l')");
assert_eq!(remove_char("  x  ",' '),"x","('  x  ', ' ')");
assert_eq!(remove_char("\t\n\t",'\t'),"\n","('\\t\\n\\t', '\\t')");
assert_eq!(remove_char("café",'é'),"caf","('café', 'é')");
assert_eq!(remove_char("cafe\u{301}",'\u{301}'),"cafe","('cafe\u{301}', '\u{301}')");
assert_eq!(remove_char("cafe\u{301}",'e'),"caf\u{301}","('cafe\u{301}', 'e')");
assert_eq!(remove_char("🚀a🚀",'🚀'),"a","('🚀a🚀', '🚀')");
assert_eq!(remove_char("日本日",'日'),"本","('日本日', '日')");
assert_eq!(remove_char("a-b-c",'-'),"abc","('a-b-c', '-')");
assert_eq!(remove_char("1,234,567",','),"1234567","('1,234,567', ',')");
assert_eq!(remove_char("x\u{0}y",'\u{0}'),"xy","('x\\x00y', '\\x00')");
assert_eq!(remove_char("ßß",'s'),"ßß","('ßß', 's')");
assert_eq!(remove_char("xyz\r\n",'\r'),"xyz\n","('xyz\\r\\n', '\\r')");
assert_eq!(remove_char("mississippi",'s'),"miiippi","('mississippi', 's')");
assert_eq!(remove_char("aAaA",'A'),"aa","('aAaA', 'A')");
let long="ab".repeat(5000);assert_eq!(remove_char(&long,'a'),"b".repeat(5000));
let rockets="\u{1F680}x".repeat(1000);assert_eq!(remove_char(&rockets,'x'),"\u{1F680}".repeat(1000));
for _ in 0..3 {assert_eq!(remove_char("pin-42-pin",'-'),"pin42pin");}
}
