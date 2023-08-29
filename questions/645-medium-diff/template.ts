
// 思路：（Exclude 排除）TS内置工具
// 1、Exclude<A, B>排除两种联合类型中的未出现的值
// 2、循环”排除集“得到K，从而得到Value
type Diff<O, O1> = {
    [K in Exclude<keyof (O & O1), keyof (O | O1)>]: (O & O1)[K]
}


// 想要的结果
// type Foo = {
//     a: string;
//     b: number;
// }
// type Bar = {
//     a: string;
//     c: boolean
// }

// type Result1 = Diff<Foo, Bar> // { b: number, c: boolean }
// type Result2 = Diff<Bar, Foo> // { b: number, c: boolean }
