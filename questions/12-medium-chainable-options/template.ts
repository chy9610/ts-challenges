type NeveRepeat<T, K> = K extends keyof T ? never : K;

type Chainable<T extends Record<string, unknown> = {}> = {
  // option<K extends string, V extends unknown>(key: K extends keyof T ? never : K, value: V): Chainable<T & Record<K, V>>
  option<K extends string, V extends unknown>(key: NeveRepeat<T, K>, value: V): Chainable<T & Record<K, V>>
  get(): T
}


// 思路：
// 1、首先定义 option 函数的参数类型 K：String，V: unknown
// 2、由于不能操作相同的属性值，所以去除已经出现过的属性
// 3、确定返回值的类型为 { key:string, value: unknown }, 我们则采用 Record 工具 将 value 类型映射到 key 上；
// 4、如果 value 为 Object 类型，则递归调用 Chainable；同时合并参数类型。



// 知识点：
// 1、K extends keyof T ? never : K   =>   此行意为不可多次操作相同属性;
// 2、Record<Keys, Type>
//    用于构造一个对象类型，它所有的 Key 都是 keys 类型，它所有的 Value 都是 Type 类型。
//    这个工具类型可以被用于映射一个类型的属性到另一个类型。
    // 栗子：
    // interface CatInfo {
    //   age: number;
    //   breed: string;
    // }

    // type CatName = "miffy" | "boris" | "mordred";

    // const cats: Record<CatName, CatInfo> = {
    //   miffy: { age: 10, breed: "Persian" },
    //   boris: { age: 5, breed: "Maine Coon" },
    //   mordred: { age: 16, breed: "British Shorthair" },
    // };
    // // const cats: Record<CatName, CatInfo>
