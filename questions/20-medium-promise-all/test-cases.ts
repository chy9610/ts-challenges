import type { Equal, Expect } from '@type-challenges/utils'

const a = [Promise.resolve('你好')] as const;
console.log(a)

const promiseAllTest1 = PromiseAll([1, 2, 3] as const)
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const)
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)])
const promiseAllTest4 = PromiseAll(['张三', '李四', Promise.resolve('王五')])
const promiseAllTest5 = PromiseAll(['张三', '李四', Promise.resolve('王五')] as const)

type cases = [
  Expect<Equal<typeof promiseAllTest1, Promise<[1, 2, 3]>>>,
  Expect<Equal<typeof promiseAllTest2, Promise<[1, 2, number]>>>,
  Expect<Equal<typeof promiseAllTest3, Promise<[number, number, number]>>>,
  Expect<Equal<typeof promiseAllTest4, Promise<[string, string, string]>>>,
  Expect<Equal<typeof promiseAllTest5, Promise<['张三', '李四', string]>>>,
]