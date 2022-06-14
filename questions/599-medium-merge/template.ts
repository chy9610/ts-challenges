type Merge<F extends Record<keyof any, unknown>, S extends Record<keyof any, unknown>> =
    {
        [P in keyof F | keyof S]: P extends keyof S ? S[P] : F[P]
    }

// 思路：
// 1、获取两个类型对象中的 Key
// 2、判断当前 Key 值是否出现在后一个类型对象中
// 3、如果存在则使用，否则使用第一个类型对象中的 Key 值