type U = ' ' | '\n' | '\t';
type TrimLeft<S extends string> = S extends `${U}${infer P}` ? TrimLeft<P> : S;

// 思路：
// 1、根据测试用例可知： 空格、换行符、TAB退格符，符合以上类型的字符需要去掉
// 2、infer P => 条件判断剩余部分是否存在, 将剩余部分字符递归判断
// 3、直至第一个字符不在是以上类型值为止