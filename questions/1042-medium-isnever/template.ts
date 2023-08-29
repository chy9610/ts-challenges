// 检测是否为never, 或联合类型中包含never不算
// 中括号的作用在于，实际属性个数不确定性
type IsNever<T> = [T] extends [never] ? true : false