import { Equal, Expect } from '@type-challenges/utils'
type t1 = MyPick<Todo, 'title'>
type t2 = MyPick<Todo, 'title' | 'completed'>
// type t3 = MyPick<Todo, 'title' | 'completed' | 'invalid'>

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>,
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}
