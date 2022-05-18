// 使用工具类解决
// type MyReadonly2<T, K extends keyof T = keyof T> = Omit<T,K> & Readonly<Pick<T, K>>

// 简化版
// type MyReadonly2<T, K extends keyof T = keyof T> = {readonly [key in K]: T[key]} & {[key in keyof T as (key extends K ? never : key)]: T[key]}

// 详细版
type MyEncloud<T, K> = T extends K ? never : T; 
type MyReadonly2<T, K extends keyof T = keyof T> = {readonly [key in K]: T[key]} & {[key in MyEncloud<keyof T, K>]: T[key]}


// 知识点：
// 1、泛型 K 存在空的情况， 所以采用 = 默认赋值
// 2、as 指定类型，“ 此用法会阻断编译器的类型推断，需谨慎使用 ”
// 3、& 表示交集，两个类型都拥有的类型

// 步骤：
// 1、重置对象中所有的属性为 Readonly 类型
// 2、如果置顶类型，则相关类型为 Readonly 类型；否则全部为 Readonly 类型。