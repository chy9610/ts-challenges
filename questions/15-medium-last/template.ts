type LastArray<T extends any[]> = T extends [...any, infer K] ? K : never;

// 思路：
// 1、返回最后一个类型