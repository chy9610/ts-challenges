// 是否联合类型
// 分布条件类型, 搭配isNever
type IsUnion<T extends unknown, O = T> = [T] extends [never] ? false : T extends O ? [O] extends [T] ? false : true : never