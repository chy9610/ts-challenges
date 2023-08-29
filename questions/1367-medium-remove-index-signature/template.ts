
// 类型包含 string、number、symbol
type RemoveIndexSignature<T> = {
    [K in keyof T as string extends K ? never : number extends K ? never : symbol extends K ? never : K] : T[K]
}
