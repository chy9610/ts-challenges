declare function PromiseAll<T extends unknown[]>(values: readonly [...T]): Promise<{[K in keyof T]: T[K] extends Promise<infer U> ? U: T[K]}>;

// 思路：
// 1、确定参数类型为一个数组
// 2、因为 as const 确定为只读类型 readonly
// 3、返回值为Promise
// 4、返回值为Promise类型时，返回 Promise返回值 的类型


// 知识点：
// 1、infer 条件判断
// 2、Promise 类型
// 3、{[K in keyof T]: T[K]} 循环遍历数组中的键值对 