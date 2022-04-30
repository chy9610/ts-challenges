
// 返回数组的第一个值

// type First<T extends any[]> = T extends [] ? never : T[0];
// type First<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never;
// type First<T extends any[]> = T["length"] extends 0 ? never : T[0];
type First<T extends any[]> = T[0] extends T[number] ? T[0] : never;



// js 实现
function First(array = []) {
    return array[0]
}


// infer  类型推断