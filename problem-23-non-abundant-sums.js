// Project Euler: Problem 23: Non-abundant sums
// A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

// A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

// As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

// Find the sum of all positive integers <= n which cannot be written as the sum of two abundant numbers.

// *** Tests ***
// sumOfNonAbundantNumbers(10000) should return 3731004.
// sumOfNonAbundantNumbers(15000) should return 4039939.
// sumOfNonAbundantNumbers(20000) should return 4159710.
// sumOfNonAbundantNumbers(28123) should return 4179871.

function sumOfNonAbundantNumbers(n) {
  // Good luck!
  const sumDivisors = (list) => {
    if (!list.length) return 0;
    return list.reduce((acc, v) => acc += v, 0);
  };
  const isAbundant = (n) => {
    return n < sumDivisors(calcDivisors(n)) ? true : false;
  };

  const abundance = new Set();
  const abundanceSums = new Set();
  for (let i = 1; i <= n; i++) {
    if (isAbundant(i)) {
      abundance.add(i);
      for (let a of abundance) {
        if (!abundanceSums.has(i + a))
          abundanceSums.add(i + a);
        if (i + a > n) break;
      }
    }
  }
  //  console.log(abundance);
  let result = 0;
  for (let i = 1; i <= n; i++) {
    if (!abundanceSums.has(i)) result += i;
  }

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

sumOfNonAbundantNumbers(10000); // should return 3731004.
sumOfNonAbundantNumbers(15000); // should return 4039939.
sumOfNonAbundantNumbers(20000); // should return 4159710.
sumOfNonAbundantNumbers(28123); // should return 4179871.
