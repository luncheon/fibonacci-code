import { it } from "node:test";
import assert from "node:assert/strict";
import { encodeFibonacci, decodeFibonacci } from "./index.js";

it("encodeFibonacci", () => {
  assert.deepEqual(encodeFibonacci(1), [1, 1]);
  assert.deepEqual(encodeFibonacci(2), [0, 1, 1]);
  assert.deepEqual(encodeFibonacci(3), [0, 0, 1, 1]);
  assert.deepEqual(encodeFibonacci(4), [1, 0, 1, 1]);
  assert.deepEqual(encodeFibonacci(5), [0, 0, 0, 1, 1]);
  assert.deepEqual(encodeFibonacci(6), [1, 0, 0, 1, 1]);
  assert.deepEqual(encodeFibonacci(7), [0, 1, 0, 1, 1]);
  assert.deepEqual(encodeFibonacci(8), [0, 0, 0, 0, 1, 1]);
  assert.deepEqual(encodeFibonacci(9), [1, 0, 0, 0, 1, 1]);
  assert.deepEqual(encodeFibonacci(10), [0, 1, 0, 0, 1, 1]);
  assert.deepEqual(encodeFibonacci(11), [0, 0, 1, 0, 1, 1]);
  assert.deepEqual(encodeFibonacci(12), [1, 0, 1, 0, 1, 1]);
  assert.deepEqual(encodeFibonacci(13), [0, 0, 0, 0, 0, 1, 1]);
  assert.deepEqual(encodeFibonacci(14), [1, 0, 0, 0, 0, 1, 1]);
  assert.deepEqual(encodeFibonacci(15), [0, 1, 0, 0, 0, 1, 1]);
  assert.equal([1, 10, 100, 1000].flatMap(encodeFibonacci).join(""), "11010011001010000110000010000000011");
});

it("encodeFibonacci valid range", () => {
  assert.throws(() => encodeFibonacci(-1), RangeError);
  assert.throws(() => encodeFibonacci(0), RangeError);
  assert.doesNotThrow(() => encodeFibonacci(Number.MAX_SAFE_INTEGER));
  assert.throws(() => encodeFibonacci(Number.MAX_SAFE_INTEGER + 2), RangeError);
});

it("decodeFibonacci", () => {
  assert.deepEqual(decodeFibonacci([0, 0, 0, 0, 1, 1]), 8);

  const bits = Iterator.from("11010011001010000110000010000000011").map(bit => parseInt(bit));
  assert.equal(decodeFibonacci(bits), 1);
  assert.equal(decodeFibonacci(bits), 10);
  assert.equal(decodeFibonacci(bits), 100);
  assert.equal(decodeFibonacci(bits), 1000);

  for (let n = 1; n < 1_000_000; n++) {
    assert.equal(decodeFibonacci(encodeFibonacci(n)), n);
  }
});

it("decodeFibonacci interface", () => {
  assert.equal(decodeFibonacci([0, 0, 1, 1].values()), 3);
  assert.equal(decodeFibonacci(function*(){ yield* [0, 0, 1, 1]; }()), 3);
});

it("decodeFibonacci valid range", () => {
  assert.throws(() => decodeFibonacci([0, 0, 0]), RangeError);
  assert.doesNotThrow(() => decodeFibonacci("001001000100100100000101000001000101001010010000100010001000000101000000000011".split("").map(Number)));
  assert.throws(() => decodeFibonacci("000101000100100100000101000001000101001010010000100010001000000101000000000011".split("").map(Number)), RangeError);
});
