type trimType = ' ' | '\n' | '\t';
type TrimAgo<S extends string> = S extends `${trimType}${infer T}` ? TrimAgo<T> : S;
type Trim<S extends string> = S extends `${infer T}${trimType}` ? Trim<T> : TrimAgo<S>;

// 思路：
// 1、判断前后是否还存在空字段
// 2、编写固定格式，前后设定 infer 条件，递归执行