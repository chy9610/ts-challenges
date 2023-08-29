
// 思路：
// 1、字符串整体切割
// 2、递归循环
type DropChar<S, C extends string | number | bigint | boolean | null | undefined> = S extends `${infer R}${C}${infer L}` ? DropChar<`${R}${L}`, C> : S