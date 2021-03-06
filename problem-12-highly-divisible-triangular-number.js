// Project Euler: Problem 12: Highly divisible triangular number
// The sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:

// 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...
// Let us list the factors of the first seven triangle numbers:

// 1: 1
// 3: 1, 3
// 6: 1, 2, 3, 6
// 10: 1, 2, 5, 10
// 15: 1, 3, 5, 15
// 21: 1, 3, 7, 21
// 28: 1, 2, 4, 7, 14, 28
// We can see that 28 is the first triangle number to have over five divisors.

// What is the value of the first triangle number to have over n divisors?

// *** Tests ***
// divisibleTriangleNumber(5) should return 28.
// divisibleTriangleNumber(23) should return 630.
// divisibleTriangleNumber(167) should return 1385280.
// divisibleTriangleNumber(374) should return 17907120.
// divisibleTriangleNumber(500) should return 76576500.

function divisibleTriangleNumber(n) {
  // Good luck!
  let collected = 0;
  let next = 1;
  while (true) {
    let CEILING = collected / 2;
    let divisors = 0;
    for (let i = 1; i < CEILING; i++) {
      if (collected % i === 0) {
        divisors += 2;
        CEILING = collected / i;
      }
    }
    if (divisors > n) {
      break;
    }
    collected += next;
    next += 1;
  }
  console.log(collected);
  return collected;
}

divisibleTriangleNumber(500);
