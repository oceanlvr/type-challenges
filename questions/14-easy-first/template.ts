// type First<T extends readonly unknown[]> = T extends [] ? never : T[0]
type First<T extends readonly unknown[]> = T extends [infer Head, ...unknown[]]
  ? Head
  : never
