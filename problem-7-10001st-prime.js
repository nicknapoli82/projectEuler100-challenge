// Project Euler: Problem 7: 10001st prime
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the nth prime number?

// *** Tests ***
// nthPrime(6) should return 13.
// nthPrime(10) should return 29.
// nthPrime(100) should return 541.
// nthPrime(1000) should return 7919.
// nthPrime(10001) should return 104743.

function nthPrime(n) {
  // Good luck!
  const primes = [2];
  const isPrimeTest = (test) => {
    for (let p of primes) {
      if (test % p === 0) {
        return false;
      }
    }
    return true;
  };

  for (let i = 3; primes.length < n; i += 2) {
    if (isPrimeTest(i)) {
      primes.push(i);
    }
  }
  return primes[primes.length - 1];
}

nthPrime(6);
