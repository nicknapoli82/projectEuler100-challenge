// Project Euler: Problem 27: Quadratic primes
// Euler discovered the remarkable quadratic formula:

// n^2+n+41 
// It turns out that the formula will produce 40 primes for the consecutive integer values  0≤n≤39 . However, when  n=40,40^2+40+41=40(40+1)+41  is divisible by 41, and certainly when  n=41,41^2+41+41  is clearly divisible by 41.

// The incredible formula  n^2−79n+1601  was discovered, which produces 80 primes for the consecutive values  0≤n≤79 . The product of the coefficients, −79 and 1601, is −126479.

// Considering quadratics of the form:

// n^2+an+b , where  |a|<range  and  |b|≤range where  |n|  is the modulus/absolute value of  n
// e.g.  |11|=11  and  |−4|=4 
// Find the product of the coefficients,  a  and  b , for the quadratic expression that produces the maximum number of primes for consecutive values of  n , starting with  n=0 .

// *** Tests ***
// quadraticPrimes(200) should return -4925.
// quadraticPrimes(500) should return -18901.
// quadraticPrimes(800) should return -43835.
// quadraticPrimes(1000) should return -59231.

function quadraticPrimes(range) {
  // Good luck!
  const primesList = new Set();
  primesList.add(2);
  let highestPrimeFound = 2;
  const isPrime = function(n) {
    for (let i = highestPrimeFound; i <= n; i++) {
      let primeFlag = true;
      let CEILING = (Math.sqrt(i) + 1) | 0;
      for (let test of primesList.values()) {
        if (i % test === 0) {
          primeFlag = false;
          break;
        }
        if (test > CEILING) break;
      }
      if (primeFlag) {
        primesList.add(i);
        highestPrimeFound = i;
      }
    }
    if (primesList.has(n)) return true;
    else return false;
  };
  isPrime(range);

  const quadForm = (n, a, b) => {
    return (n ** 2) + (a * n) + b;
  };

  let maxPrimes = 0;
  let maxA = 0, maxB = 0;
  for (let a = -range; a <= range; a++) {
    for (let b of primesList.values()) {
      if (b > range) break;
      let primesCount = 0;
      for (let n = 0; n <= range; n++) {
        if (!isPrime(quadForm(n, a, b))) {
          break;
        }
        else primesCount++;
      }

      if (primesCount > maxPrimes) {
        maxPrimes = primesCount;
        maxA = a;
        maxB = b;
      }
    }
  }
  //  console.log("a = " + maxA + " | b = " + maxB + " | Highest Prime Found = " + highestPrimeFound + " | Product = ", maxA * maxB);

  return maxA * maxB;
}

quadraticPrimes(200); // should return -4925.
quadraticPrimes(500); // should return -18901.
quadraticPrimes(800); // should return -43835.
quadraticPrimes(1000); // should return -59231.
