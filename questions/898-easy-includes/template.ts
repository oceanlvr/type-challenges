type Equal<T, U> = (<X>() => X extends T ? 1 : 2) extends <X>() => X extends U
  ? 1
  : 2
  ? true
  : false

type Includes<T extends readonly any[], U> = T extends [
  infer Head,
  ...(infer Rest)
]
  ? Equal<Head, U> extends true
    ? true
    : Includes<Rest, U>
  : false
