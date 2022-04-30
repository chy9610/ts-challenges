
// 对象的键值类型只能为三种类型 string、number、symbol
type TupleToObject<T extends readonly (string | number | symbol)[]> = {
    [P in T[number]]: P
}

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type s = TupleToObject<typeof tuple>


// js
function TupleToObject(todo = []) {
    const obj = {};

    todo.forEach(val => {
        obj[val] = val
    });

    return obj
}