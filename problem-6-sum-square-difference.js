// Project Euler: Problem 6: Sum square difference
// The sum of the squares of the first ten natural numbers is,

// 12 + 22 + ... + 102 = 385
// The square of the sum of the first ten natural numbers is,

// (1 + 2 + ... + 10)2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.

// *** Tests ***
// sumSquareDifference(10) should return 2640.
// sumSquareDifference(20) should return 41230.
// sumSquareDifference(100) should return 25164150.

function sumSquareDifference(n) {
  // Good luck!
  let sumSquare = 0, squareSum = 0;
  for (let i = 1; i <= n; i++) {
    sumSquare += i ** 2;
    squareSum += i;
  }
  squareSum = squareSum ** 2;
  return squareSum - sumSquare;
}

sumSquareDifference(10);
