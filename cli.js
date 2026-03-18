#!/usr/bin/env node
import { encodeFibonacci } from "./index.js";

if (process.argv.length === 2) {
  console.log(`try $ npx @luncheon/fibonacci-code 3 10-20 0x80`)
} else {
  const ranges = process.argv.slice(2).map((arg) => {
    const split = arg.split("-", 2);
    const min = parseInt(split[0]);
    const max = split[1] ? parseInt(split[1]) : min;
    return [min, max];
  });
  const maxLength = String(Math.max(...ranges.flat())).length;
  for (const [min, max] of ranges) {
    for (let n = min; n <= max; n++) {
      console.log(" ".repeat(maxLength - String(n).length), n, encodeFibonacci(n).join(""));
    }
  }
}
