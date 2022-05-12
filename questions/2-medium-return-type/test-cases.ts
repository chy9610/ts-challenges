type MyReturnType<T extends Function> = T extends (...arg: any) => infer P
  ? P
  : never;
