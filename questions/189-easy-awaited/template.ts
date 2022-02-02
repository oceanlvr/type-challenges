// https://dev.to/aexol/typescript-tutorial-infer-keyword-2cn

type MyAwaited<T extends Promise<any>> = T extends Promise<infer R>
  ? R extends Promise<any>
    ? MyAwaited<R>
    : R
  : T
