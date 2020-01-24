// Project Euler: Problem 30: Digit n powers
// Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:

// 1634 = 1**4 + 6**4 + 3**4 + 4**4

// 8208 = 8**4 + 2**4 + 0**4 + 8**4

// 9474 = 9**4 + 4**4 + 7**4 + 4**4

// As 1 = 14 is not a sum it is not included.

// The sum of these numbers is 1634 + 8208 + 9474 = 19316.

// Find the sum of all the numbers that can be written as the sum of n powers of their digits.
// *** Tests ***
// digitnPowers(2) should return 0.
// digitnPowers(3) should return 1301.
// digitnPowers(4) should return 19316.
// digitnPowers(5) should return 443839.

function digitnPowers(n) {
  // Good luck!
  let powers = (new Array(9)).fill(0).map((_, idx) => idx ** n);
  let digits = new Array(n).fill(0);
  digits[digits.length - 1] = 2;

  const rolodex = function(arr) {
    let place = arr.length - 1;
    if (arr[place] < 9) {
      arr[place] += 1;
      return;
    }

    while (arr[place] === 9 && place > 0) place--;
    if (place === 0 && arr[0] === 9) {
      arr[place] = 1;
      arr.push(0);
    }
    else {
      arr[place] += 1;
    }
    place++;
    while (place < arr.length) {
      arr[place] = 0;
      place++;
    }
    return;
  };

  let LIMIT = 9 ** n;
  for (let i = 9, addLimit = 9 ** n; i < LIMIT;) {
    LIMIT += addLimit;
    i = (i * 10) + 9;
  }

  let resultSum = 0;
  for (let i = 2; i <= LIMIT; i++) {
    let test = digits.reduce((acc, num) => acc + (num ** n), 0);
    if (i === test) {
      resultSum += test;

    }
    rolodex(digits);
  }
  console.log(resultSum);
  return resultSum;
}

digitnPowers(5);
