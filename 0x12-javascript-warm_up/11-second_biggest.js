#!/usr/bin/node
function findSecondLargest (args) {
  if (args.length <= 1) {
    return 0;
  }

  let largest = Number.MIN_SAFE_INTEGER;
  let secondLargest = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < args.length; i++) {
    const num = parseInt(args[i]);
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num !== largest) {
      secondLargest = num;
    }
  }

  return secondLargest;
}

const args = process.argv.slice(2);
const secondLargest = findSecondLargest(args);

console.log(secondLargest);
