# @luncheon/fibonacci-code

A [Fibonacci coding](https://en.wikipedia.org/wiki/Fibonacci_coding) implementation.

```ts
import assert from "node:assert/strict";
import { encodeFibonacci, decodeFibonacci } from "@luncheon/fibonacci-code";

assert.deepEqual(encodeFibonacci(1), [1, 1]);
assert.deepEqual(encodeFibonacci(2), [0, 1, 1]);
assert.deepEqual(encodeFibonacci(3), [0, 0, 1, 1]);
assert.deepEqual(encodeFibonacci(4), [1, 0, 1, 1]);
assert.deepEqual(encodeFibonacci(5), [0, 0, 0, 1, 1]);
assert.deepEqual(encodeFibonacci(6), [1, 0, 0, 1, 1]);
assert.deepEqual(encodeFibonacci(7), [0, 1, 0, 1, 1]);
assert.deepEqual(encodeFibonacci(8), [0, 0, 0, 0, 1, 1]);

for (let n = 1; n < 1_000_000; n++) {
  assert.equal(decodeFibonacci(encodeFibonacci(n)), n);
}
```

## CLI

```bash
$ npx @luncheon/fibonacci-code 3 10-20 0x80
   3 0011
  10 010011
  11 001011
  12 101011
  13 0000011
  14 1000011
  15 0100011
  16 0010011
  17 1010011
  18 0001011
  19 1001011
  20 0101011
 128 00010001011
```

## Reference

- [Aviezri S. Fraenkel, Shmuel T. Kleinb. (1996). "Robust universal complete codes for transmission and compression"](https://www.sciencedirect.com/science/article/pii/0166218X9300116H)

## License

[WTFPL](http://www.wtfpl.net)

## See also

- [@luncheon/**golomb-code**](https://www.npmjs.com/package/@luncheon/golomb-code): A [Golomb coding](https://en.wikipedia.org/wiki/Golomb_coding) implementation.
- [@luncheon/**exponential-golomb-code**](https://www.npmjs.com/package/@luncheon/exponential-golomb-code): An [exponential-Golomb coding](https://en.wikipedia.org/wiki/Exponential-Golomb_coding) implementation.
- [@luncheon/**varint**](https://www.npmjs.com/package/@luncheon/varint): A `BigInt`-native varint codec supporting arbitrary chunk sizes and zigzag encoding.
