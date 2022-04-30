// 对比
type IsEqual<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false

type Includes<T extends readonly any[], U> = T extends [infer K, ...infer P] ? (IsEqual<K, U> extends true ? true : Includes<P, U> ): false
