import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<BinToNum<'10'>, 2>>,
  Expect<Equal<BinToNum<'0011'>, 3>>,
  Expect<Equal<BinToNum<'00000000'>, 0>>,
  Expect<Equal<BinToNum<'11111111'>, 255>>,
  Expect<Equal<BinToNum<'10101010'>, 170>>,
]
