use first_repeated_char::first_repeated_char;
#[test]
fn spec_cases() {
assert_eq!(first_repeated_char(""),None,"''");
assert_eq!(first_repeated_char("a"),None,"'a'");
assert_eq!(first_repeated_char("aa"),Some('a'),"'aa'");
assert_eq!(first_repeated_char("abc"),None,"'abc'");
assert_eq!(first_repeated_char("abca"),Some('a'),"'abca'");
assert_eq!(first_repeated_char("abba"),Some('b'),"'abba'");
assert_eq!(first_repeated_char("abab"),Some('a'),"'abab'");
assert_eq!(first_repeated_char("abcab"),Some('a'),"'abcab'");
assert_eq!(first_repeated_char("aba"),Some('a'),"'aba'");
assert_eq!(first_repeated_char("aA"),None,"'aA'");
assert_eq!(first_repeated_char("Hello"),Some('l'),"'Hello'");
assert_eq!(first_repeated_char("a b c"),Some(' '),"'a b c'");
assert_eq!(first_repeated_char("a  b"),Some(' '),"'a  b'");
assert_eq!(first_repeated_char(" x "),Some(' '),"' x '");
assert_eq!(first_repeated_char("1231"),Some('1'),"'1231'");
assert_eq!(first_repeated_char("日本日"),Some('日'),"'日本日'");
assert_eq!(first_repeated_char("éè"),None,"'éè'");
assert_eq!(first_repeated_char("cafe\u{301}\u{301}"),Some('\u{301}'),"'cafe\u{301}\u{301}'");
assert_eq!(first_repeated_char("🚀x🚀"),Some('🚀'),"'🚀x🚀'");
assert_eq!(first_repeated_char("xyz\r\n\r"),Some('\r'),"'xyz\\r\\n\\r'");
assert_eq!(first_repeated_char("\t\t"),Some('\t'),"'\\t\\t'");
assert_eq!(first_repeated_char("mississippi"),Some('s'),"'mississippi'");
assert_eq!(first_repeated_char("swiss"),Some('s'),"'swiss'");
assert_eq!(first_repeated_char("abcdefg"),None,"'abcdefg'");
assert_eq!(first_repeated_char("ab\u{0}\u{0}"),Some('\u{0}'),"'ab\\x00\\x00'");
assert_eq!(first_repeated_char("AaBbA"),Some('A'),"'AaBbA'");
let long="ab".repeat(5000);assert_eq!(first_repeated_char(&long),Some('a'));
let distinct: String=(0x4e00u32..0x4e00+3000).map(|u| char::from_u32(u).unwrap()).collect();assert_eq!(first_repeated_char(&distinct),None);
let again=format!("{}{}",distinct,'\u{4e00}');assert_eq!(first_repeated_char(&again),Some('\u{4e00}'));
for _ in 0..3 {assert_eq!(first_repeated_char("pin-42-pin"),Some('-'));}
}
