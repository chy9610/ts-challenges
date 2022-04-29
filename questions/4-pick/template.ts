
// 联合类型 union   'title' | 'commit'

type MyPick<T, K extends keyof T> = { 
    [P in K]: T[P]
 }


// js 思路
// function MyPick(todo, keys) {
//     const obj = {}

//     keys.forEach(key => {
//         if (key in todo)
//             obj[key] = todo[key]
//     });

//     return obj
// }


// 1.返回一个对象
// 2.遍历 keys
// 3.取值 todo[key]
// 4.条件限制：key 在不在 todo 中