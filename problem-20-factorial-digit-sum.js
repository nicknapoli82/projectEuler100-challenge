// Project Euler: Problem 20: Factorial digit sum
// n! means n × (n − 1) × ... × 3 × 2 × 1

// For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
// and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

// Find the sum of the digits n!

// *** Tests ***
// sumFactorialDigits(10) should return 27.
// sumFactorialDigits(25) should return 72.
// sumFactorialDigits(50) should return 216.
// sumFactorialDigits(75) should return 432.
// sumFactorialDigits(100) should return 648.

function sumFactorialDigits(n) {
  // Good luck!
  let factorial = new BigNum(n);
  for (let i = n - 1; i > 0; i--) {
    //    console.log(factorial.result);
    factorial.mul(i, factorial.result);
  }

  let result = factorial.sum(...factorial.result);
  console.log(result);
  return result;
}

function BigNum(num = undefined) {
  this.result = [];
  if (num !== undefined) {
    this.result = this.determineTypeAndConvert(num);
  }
}

BigNum.prototype.numToArray = function(n) {
  let newNum = [];
  while (n !== 0) {
    newNum.push(n % 10);
    n = (n / 10) | 0;
  }
  return newNum.reverse();
};

BigNum.prototype.determineTypeAndConvert = function(t) {
  if (typeof t === 'number') {
    return this.numToArray(t);
  }
  else if (typeof t === 'string') {
    let testRes = new Array(t.length);
    for (let i = 0; i < t.length; i++) {
      let testDigit = Number(t[i]);
      if (testDigit === NaN) return null;
      testRes[i] = testDigit;
    }
    return testRes;
  }
  else if (Array.isArray(t)) {
    return t;
  }
  else if (t instanceof BigNum) {
    return [...t.result];
  }
  return null;
};

BigNum.prototype.sum = function(...numList) {
  if (this.result === undefined || this.result === null) this.result = [];
  let current = null, next;
  for (let n of numList) {
    current = current ? this.result : [];
    next = this.determineTypeAndConvert(n);
    let [num1, num2] = current.length >= next.length ? [current, next] : [next, current];
    num2 = [...(new Array(num1.length - num2.length)).fill(0), ...num2];
    let carry = 0;
    for (let i = num1.length - 1; i >= 0; i--) {
      num1[i] += num2[i] + carry;
      if (num1[i] > 9) {
        num1[i] -= 10;
        carry = 1;
      }
      else carry = 0;
    }
    this.result = carry ? [1, ...num1] : num1;
  }
  return this.result.join('');
};

BigNum.prototype.mul = function(...numList) {
  if (this.result === undefined || this.result === null) this.result = [];
  let current = null, next;
  for (let n of numList) {
    current = current ? this.result : [1];
    next = this.determineTypeAndConvert(n);
    let place = 0;
    let sumCollection = [];
    for (let c = current.length - 1; c >= 0; c--) {
      let multiplier = current[c];
      let carry = 0;
      let productCollection = place ? new Array(place).fill(0) : [];
      place++;
      for (let n = next.length - 1; n >= 0; n--) {
        let multiplicant = next[n];
        let product = (multiplier * multiplicant) + carry;
        if (product > 9) {
          let tempCarry = (product / 10) | 0;
          productCollection.push(product - (tempCarry * 10));
          carry = tempCarry;
        }
        else {
          productCollection.push(product);
          carry = 0;
        }
      }
      if (carry) productCollection.push(carry);
      sumCollection.push(productCollection.reverse());
    }
    this.sum(...sumCollection);
  }
  return this.result.join('');
};

BigNum.prototype.pow = function(num, exp) {
  this.mul(...new Array(exp).fill(num));
  console.log(this.result);
  return this.result.join('');
};


sumFactorialDigits(10); //should return 27.
sumFactorialDigits(25); //should return 72.
sumFactorialDigits(50); //should return 216.
sumFactorialDigits(75); //should return 432.
sumFactorialDigits(100); //should return 648.
