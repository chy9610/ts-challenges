type Key = string | number | symbol;
type AppendToObject<T extends object, U extends Key, V extends unknown> =
    { [K in keyof T | U]: K extends keyof T ? T[K] : V }


// js 实现
function addObj(obj: object, key: Key, value: unknown): object {
    return { ...obj, key: value }
}


// 思路：
// 1、确认参数类型， U 键类型为 字符串 | 数字类型 | 独一无二类型
// 2、循环 T 类型中的键值对，对已存在的键使用已有值；反之使用新值 V