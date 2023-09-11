#!/usr/bin/node
function computeFactorial (n) {
  // Base case: factorial of 0 is 1
  if (isNaN(n)) {
    return 1;
  } else if (n <= 1) {
    return 1;
  } else {
    // Recursive case: factorial of n is n times factorial of (n-1)
    return n * computeFactorial(n - 1);
  }
}

const arg = parseInt(process.argv[2]);

console.log(computeFactorial(arg));
