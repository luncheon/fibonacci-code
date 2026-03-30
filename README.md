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

assert.deepEqual(decodeFibonacci([0, 0, 0, 0, 1, 1]), 8);

assert.equal([1, 10, 100, 1000].flatMap(encodeFibonacci).join(""), "11010011001010000110000010000000011");

const bits = Iterator.from("11010011001010000110000010000000011").map(bit => parseInt(bit));
assert.equal(decodeFibonacci(bits), 1);
assert.equal(decodeFibonacci(bits), 10);
assert.equal(decodeFibonacci(bits), 100);
assert.equal(decodeFibonacci(bits), 1000);
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

- [@luncheon/**parity-step-code**](https://www.npmjs.com/package/@luncheon/parity-step-code): A Universal Coding of Integers (UCI) inspired by [Collatz conjecture](https://en.wikipedia.org/wiki/Collatz_conjecture).
- [@luncheon/**golomb-code**](https://www.npmjs.com/package/@luncheon/golomb-code): A [Golomb coding](https://en.wikipedia.org/wiki/Golomb_coding) implementation.
- [@luncheon/**exponential-golomb-code**](https://www.npmjs.com/package/@luncheon/exponential-golomb-code): An [exponential-Golomb coding](https://en.wikipedia.org/wiki/Exponential-Golomb_coding) implementation.
- [@luncheon/**elias-codes**](https://www.npmjs.com/package/@luncheon/elias-codes): Implementation of Elias [gamma (γ)](https://en.wikipedia.org/wiki/Elias_gamma_coding), [delta (δ)](https://en.wikipedia.org/wiki/Elias_delta_coding) and [omega (ω)](https://en.wikipedia.org/wiki/Elias_omega_coding) coding.
- [@luncheon/**varint**](https://www.npmjs.com/package/@luncheon/varint): A `BigInt`-native [varint](https://en.wikipedia.org/wiki/Variable-length_quantity) codec supporting arbitrary chunk sizes and zigzag encoding.
