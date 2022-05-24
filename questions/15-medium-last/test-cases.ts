import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<LastArray<[3, 2, 1]>, 1>>,
  Expect<Equal<LastArray<[() => 123, { a: string }]>, { a: string }>>,
]