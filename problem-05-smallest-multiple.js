// Project Euler: Problem 5: Smallest multiple
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?

// *** Tests ***
// smallestMult(5) should return 60.
// smallestMult(7) should return 420.
// smallestMult(10) should return 2520.
// smallestMult(13) should return 360360.
// smallestMult(20) should return 232792560.

function smallestMult(n) {
  // Good luck!
  let found = false;
  let result = 0;

  while (true) {
    result += n;
    let toggle = true;
    for (let i = 1; i <= n && toggle; i++) {
      if (result % i !== 0) {
        toggle = false;
      }
    }
    if (toggle)
      break;
  }
  console.log(result);
  return result;
}

smallestMult(5);
