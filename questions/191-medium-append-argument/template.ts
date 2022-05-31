type AppendArgument<Fn extends (...args: unknown[]) => unknown, A extends unknown> =
    // 简易式做法
    // 判断参数类型是否存在、判断函数返回值类型是否存在。
    Fn extends (...args: infer K) => infer U ? (...args: [...K, A]) => U : never;

    // 工具式做法
    // 确定参数类型与返回值类型一定存在的情况下，使用 Parameters 工具返回 Fn 所有的参数类型, 使用 ReturnType 工具返回 Fn 返回值的类型。
    // (...args: [...Parameters<Fn>, A]) => ReturnType<Fn>