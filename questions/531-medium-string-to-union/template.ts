type StringToUnion<T extends string> =
    T extends `${infer F}${infer U}` ? F | StringToUnion<U> : never; 

// 思路：
// 1、将字符串切割
// 2、首字符出现时，将字符延后处理，同时与后续的字符串做循环处理
// 3、如果不存，则返回 never