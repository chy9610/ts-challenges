interface Chainable = {
    option<key extends string, value: any): any
    get(): any
  }
  
  // 思路：