type TupleToUnion<T extends unknown[]> = T[number]

// 1、确定接受参数为元组，但确定元组内一定存在类型，即使用 unknown[]。注意：any[] 会出现 类型为 null undefined 的情况
// 2、将元组内的类型遍历开，即得到一个 合集；