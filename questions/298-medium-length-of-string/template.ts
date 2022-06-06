type LengthOfString<S extends string, A extends string[] = []> =
    S extends `${infer F}${infer L}` ? LengthOfString<L, [F, ...A]> : A['length'];
 
// js 思路
function len(str: string): number {
    return str.length
}

// 思路：
// 1、截取第一个字符，将其添加至一个数组中
// 2、如果第一个字符一直存在，则递归循环
// 3、不存在的情况下，返回数组长度