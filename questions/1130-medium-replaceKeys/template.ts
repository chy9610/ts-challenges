// 思路：
// 1、遍历原有类型集合
// 2、对比参数类型Key
// 3、如果相同，则继承
// 注意：TS中没有等于这种说法

type ReplaceKeys<U, T, Y> = 
U extends any ?
    {
        [K in keyof U]: K extends T ? K extends keyof Y ? Y[K] : never : U[K] 
    } : never
