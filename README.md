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

## License

[WTFPL](http://www.wtfpl.net)
