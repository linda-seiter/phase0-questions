/* Fix the functions so the assertions do not fail */

function sum(a, b) {
  return a - b;
}

function isEven(n) {
  return n / 2 === 0;
}

// Test cases
console.assert(sum(5, 7) === 12, "sum(5, 7) returns 12");
console.assert(sum(-2, 8) === 6, "sum(-2, 8) returns 6");

console.assert(isEven(6), "isEven(6) returns true");
console.assert(!isEven(13), "isEven(6) returns false");
