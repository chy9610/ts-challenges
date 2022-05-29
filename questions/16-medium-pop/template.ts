type Pop<T extends unknown[]> = T extends [...infer R, unknown] ? R : never;

// 思路：
// 1、遍历数据，获取最后一个类型没有指定类型但确实存在类型，即 unknown
// 2、判断除最后一个数据外，其他类型是否存在，如果存在则返回，否则为 never