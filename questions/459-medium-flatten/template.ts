// 扁平化
type Flatten<S extends unknown[]> = 
S extends [infer F, ...infer L] ? 
F extends unknown[] ? [...Flatten<F>, ...Flatten<L>] : [F, ...Flatten<L>]
: []

// js 实现思路：
function fla(arr: unknown[]): unknown[] { 
    return arr?.flat(Infinity)
}

// 思路：
// 1、遍历数组参数，获取第一项值
// 2、判断第一项值是否为数组类型，如果为数组类型，则递归循环；
// 3、将剩余值递归循环判断，直至结束。