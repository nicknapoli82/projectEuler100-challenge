// Project Euler: Problem 9: Special Pythagorean triplet
// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a^2 + b^2 = c^2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc such that a + b + c = n.

// *** Tests ***
// specialPythagoreanTriplet(1000) should return 31875000.
// specialPythagoreanTriplet(24) should return 480.
// specialPythagoreanTriplet(120) should return 49920, 55080 or 60000

function specialPythagoreanTriplet(n) {
  let sumOfabc = n;
  // Good luck!
  const CEILING = Math.floor(n / 2);
  const calcC = (a, b) => Math.sqrt(a ** 2 + b ** 2);
  const testN = (a, b, c) => {
    let t = a + b + c;
    if (t > n) return 1;
    if (t < n) return -1;
    return 0;
  };

  let a = 2, b = 2, c;
  let result = 0;
  while (!result) {
    c = calcC(a, b);
    switch (testN(a, b, c)) {
      case -1: {
        if (b > CEILING) {
          a = b = ++a;
        }
        else b++;
        break;
      }
      case 1: {
        if (a > CEILING) result = -1;
        a = b = ++a;
        break;
      }
      case 0: {
        console.log(a, b, c);
        result = a * b * c;
        break;
      }
    }
  }
  console.log(result);
  return result;
}

specialPythagoreanTriplet(1000);
