const fibs = [1, 2];
const fib = i => fibs[i] ??= fib(i - 1) + fib(i - 2);

export function encodeFibonacci(n) {
  if (n <= 0 || n > Number.MAX_SAFE_INTEGER) {
    throw RangeError("Fibonacci code only supports safe positive integers.");
  }
  let i = 0;
  while (n >= fib(i++));
  const code = Array(i).fill(0);
  code[--i] = 1;
  while (--i >= 0) {
    if (n >= fib(i)) {
      code[i] = 1;
      n -= fib(i);
    }
  }
  return code;
}

export function decodeFibonacci(bitSequence) {
  const it = Iterator.from(bitSequence);
  let n = 0;
  for (let i = 0, done, value, prev; { value, done } = it.next(), !value || !prev; i++) {
    (prev = value) && (n += fib(i));
    if (done || n > Number.MAX_SAFE_INTEGER) {
      throw RangeError("Unterminated Fibonacci code.");
    }
  }
  return n;
}
