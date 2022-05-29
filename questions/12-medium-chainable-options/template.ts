type Chainable<T extends {} = {}>  {
  option<key extends string, value: extends unknown >(key: K,value: V): Chainable<>
    get(): T
}

  // 思路：