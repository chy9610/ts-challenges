
type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer X> ? X extends Promise<unknown> ? MyAwaited<X> : X : never;



// infer