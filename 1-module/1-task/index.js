/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */

function factorial(n) {
  if (n === 0) return 1;
  let res = n;  
  for (var i = n; i > 1; i--) {
    res *= (i - 1);
  }
  return res;
}

