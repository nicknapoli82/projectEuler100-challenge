// Project Euler: Problem 21: Amicable numbers
// Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).

// If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

// For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

// Evaluate the sum of all the amicable numbers under n.

// *** Tests ***
// sumAmicableNum(1000) should return 504.
// sumAmicableNum(2000) should return 2898.
// sumAmicableNum(5000) should return 8442.
// sumAmicableNum(10000) should return 31626.

function sumAmicableNum(n) {
  // Good luck!
  const sumDivisors = (list) => {
    if (!list.length) return 0;
    return list.reduce((acc, v) => acc += v, 0);
  };

  const found = new Set();

  for (let i = 1; i <= n; i++) {
    if (!found.has(i)) {
      let test = sumDivisors(calcDivisors(i));
      let amicable = sumDivisors(calcDivisors(test));
      if (i === amicable && test !== amicable) {
        if (!found.has(test))
          found.add(test);
        if (!found.has(amicable))
          found.add(amicable);
      }
    }
  }

  let result = 0;
  for (let s of found) {
    result += s;
  }
  console.log(found);
  console.log(result);
  return result;
}

function calcDivisors(n) {
  // Good luck!
  let collected = [1];
  let CEILING = n / 2 + 1;
  for (let i = 2; i < CEILING; i++) {
    if (n % i === 0) {
      collected.push(i);
      if (i !== n / i)
        collected.push(n / i);
      CEILING = n / i;
    }
  }
  return collected;
}

sumAmicableNum(1000); // should return 504.
sumAmicableNum(2000); // should return 2898.
sumAmicableNum(5000); // should return 8442.
sumAmicableNum(10000); // should return 31626.
