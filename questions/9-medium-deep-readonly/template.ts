type DeepReadonly<T> = T extends Function ? T : {
    readonly [K in keyof T]: DeepReadonly<T[K]>
}

// 考虑到如果是函数的话，直接返回函数，这里不能extends object, 因为函数也是object
// 采用递归的形式判断是否为 Object 类型

// 知识点：
// 1、in        循环数据 
// 2、keyof 