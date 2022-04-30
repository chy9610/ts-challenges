type Last<T extends any[]> = T[T["length"] - 1]


// js
function Last(arr = []) {
    return arr[arr.length - 1]
}