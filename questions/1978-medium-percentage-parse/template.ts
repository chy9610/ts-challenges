
// 思路：
// 1、判断是否携带符号、%
// 2、判断是否携带符号
// 3、判断是否携带%
// 4、判断是否不携带其他符号
type PercentageParser<A extends string> = A extends `${infer R extends '+' | '-'}${infer S}%` ?
    [R, S, '%'] : A extends `${infer R extends '+' | '-'}${infer S}` ?
    [R, S, ''] : A extends `${infer S}%` ?
    ['', S, '%'] : A extends `${infer S}` ?
    ['', S, ''] :never