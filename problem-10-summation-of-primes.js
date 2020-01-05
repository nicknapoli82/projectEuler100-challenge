// Project Euler: Problem 10: Summation of primes
// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below n.

// primeSummation(17) should return 41.
// primeSummation(2001) should return 277050.
// primeSummation(140759) should return 873608362.
// primeSummation(2000000) should return 142913828922.

function primeSummation(n) {
  // Good luck!
  const primes = [2];
  const isPrimeTest = (test) => {
    let testRoot = Math.sqrt(test);
    for (let p of primes) {
      if (test % p === 0) {
        return false;
      }
      if (p > testRoot)
        return true;
    }
    return true;
  };

  for (let i = 3; i < n; i += 2) {
    if (isPrimeTest(i)) {
      primes.push(i);
    }
  }
  let result = primes.reduce((acc, n) => acc + n, 0);
  return result;
}

primeSummation(17);
