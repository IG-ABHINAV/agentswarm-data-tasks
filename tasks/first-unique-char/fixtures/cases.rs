use first_unique_char::first_unique_char;
#[test]
fn spec_cases() {
assert_eq!(first_unique_char(""),None,"''");
assert_eq!(first_unique_char("a"),Some('a'),"'a'");
assert_eq!(first_unique_char("aa"),None,"'aa'");
assert_eq!(first_unique_char("abc"),Some('a'),"'abc'");
assert_eq!(first_unique_char("aabbc"),Some('c'),"'aabbc'");
assert_eq!(first_unique_char("abab"),None,"'abab'");
assert_eq!(first_unique_char("abcab"),Some('c'),"'abcab'");
assert_eq!(first_unique_char("aba"),Some('b'),"'aba'");
assert_eq!(first_unique_char("aA"),Some('a'),"'aA'");
assert_eq!(first_unique_char("aAa"),Some('A'),"'aAa'");
assert_eq!(first_unique_char("Hello"),Some('H'),"'Hello'");
assert_eq!(first_unique_char("a b c"),Some('a'),"'a b c'");
assert_eq!(first_unique_char("  x"),Some('x'),"'  x'");
assert_eq!(first_unique_char(" x "),Some('x'),"' x '");
assert_eq!(first_unique_char("1231"),Some('2'),"'1231'");
assert_eq!(first_unique_char("日本日"),Some('本'),"'日本日'");
assert_eq!(first_unique_char("éè"),Some('é'),"'éè'");
assert_eq!(first_unique_char("e\u{301}\u{301}"),Some('e'),"'e\u{301}\u{301}'");
assert_eq!(first_unique_char("🚀x🚀"),Some('x'),"'🚀x🚀'");
assert_eq!(first_unique_char("xyz\r\n\r"),Some('x'),"'xyz\\r\\n\\r'");
assert_eq!(first_unique_char("\t\t"),None,"'\\t\\t'");
assert_eq!(first_unique_char("swiss"),Some('w'),"'swiss'");
assert_eq!(first_unique_char("mississippi"),Some('m'),"'mississippi'");
assert_eq!(first_unique_char("leetcode"),Some('l'),"'leetcode'");
assert_eq!(first_unique_char("loveleetcode"),Some('v'),"'loveleetcode'");
assert_eq!(first_unique_char("ab\u{0}\u{0}"),Some('a'),"'ab\\x00\\x00'");
assert_eq!(first_unique_char("AaBbA"),Some('a'),"'AaBbA'");
assert_eq!(first_unique_char("112233"),None,"'112233'");
assert_eq!(first_unique_char("a ba"),Some(' '),"'a ba'");
assert_eq!(first_unique_char(" xx"),Some(' '),"' xx'");
assert_eq!(first_unique_char("\tyy"),Some('\t'),"'\\tyy'");
assert_eq!(first_unique_char("zz\n"),Some('\n'),"'zz\\n'");
assert_eq!(first_unique_char("q\u{a0}q"),Some('\u{a0}'),"'q\\xa0q'");
let long=format!("{}c","ab".repeat(5000));assert_eq!(first_unique_char(&long),Some('c'));
let distinct: String=(0x4e00u32..0x4e00+3000).map(|u| char::from_u32(u).unwrap()).collect();assert_eq!(first_unique_char(&distinct),Some('\u{4e00}'));
let again=format!("{}{}",distinct,'\u{4e00}');assert_eq!(first_unique_char(&again),Some('\u{4e01}'));
let none="xy".repeat(4000);assert_eq!(first_unique_char(&none),None);
for _ in 0..3 {assert_eq!(first_unique_char("pin-42-pin"),Some('4'));}
}
