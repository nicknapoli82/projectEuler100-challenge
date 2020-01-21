// Project Euler: Problem 28: Number spiral diagonals
// Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:

// 21 22 23 24 25

// 20  7  8  9 10

// 19  6  1  2 11

// 18  5  4  3 12

// 17 16 15 14 13

// It can be verified that the sum of the numbers on the diagonals is 101.

// What is the sum of the numbers on the diagonals in a n by n spiral formed in the same way?

// *** Tests ***
// spiralDiagonals(101) should return 692101.
// spiralDiagonals(303) should return 18591725.
// spiralDiagonals(505) should return 85986601.
// spiralDiagonals(1001) should return 669171001.

function spiralDiagonals(n) {
  // Good luck!
  let result = 1;
  let squaresAvailable = (n * n) - 1;
  let counter = 2;
  let counted = 1;
  while (squaresAvailable) {
    for (let i = 0; i < 4; i++) {
      counted += counter;
      result += counted;
    }
    squaresAvailable -= counter * 4;
    counter += 2;
  }
  console.log(result);
  return result;
}

spiralDiagonals(101); // should return 692101.
spiralDiagonals(303); // should return 18591725.
spiralDiagonals(505); // should return 85986601.
spiralDiagonals(1001); // should return 669171001.
