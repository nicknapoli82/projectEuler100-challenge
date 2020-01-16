// Project Euler: Problem 25: 1000-digit Fibonacci number
// The Fibonacci sequence is defined by the recurrence relation:

// Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
// Hence the first 12 terms will be:

// F1 = 1
// F2 = 1
// F3 = 2
// F4 = 3
// F5 = 5
// F6 = 8
// F7 = 13
// F8 = 21
// F9 = 34
// F10 = 55
// F11 = 89
// F12 = 144
// The 12th term, F12, is the first term to contain three digits.

// What is the index of the first term in the Fibonacci sequence to contain n digits?

// *** Tests ***
// digitFibonacci(5) should return 21.
// digitFibonacci(10) should return 45.
// digitFibonacci(15) should return 69.
// digitFibonacci(20) should return 93.

// NOTE: Don't mind all the extra stuff. I wanted to compare
// the accuracty of JS Number against that has no accuracy deviation
function digitFibonacci(n) {
  // Good luck!
  const next = (f1, f2) => {
    return f1 + f2;
  };

  let b1 = new BigNum(0);
  let b2 = new BigNum(1);
  let num1 = 0, num2 = 1;
  let abusedNumber = 0;
  let abusedBignum = new BigNum(0);
  for (let i = 1; i < 200; i++) {
    abusedNumber = next(num1, num2);
    num1 = num2;
    num2 = abusedNumber;
    abusedBignum.sum(b1, b2);
    b1.result = b2.result;
    b2.result = abusedBignum.result;
    abusedBignum.result = [];
    //    console.log("i = ", i, " | Number = ", num1, " | BigNum = ", b1.result.join(''));
    if (b1.result.length === n) return i;
  }
  return n;
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

console.log(digitFibonacci(5)); // should return 21.
console.log(digitFibonacci(10)); // should return 45.
console.log(digitFibonacci(15)); // should return 69.
console.log(digitFibonacci(20)); // should return 93.
