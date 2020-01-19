function BigNum(num = undefined) {
  this.numArr = [];
  if (num !== undefined) {
    this.numArr = this.determineTypeAndConvert(num);
  }
}

BigNum.prototype.result = function() {
  return this.numArr.join('');
};

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
    return [...t.numList];
  }
  return null;
};

BigNum.prototype.sum = function(...numList) {
  if (this.numArr === undefined || this.numArr === null) this.numArr = [];
  let current = null, next;
  for (let n of numList) {
    current = current ? this.numArr : [];
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
    this.numArr = carry ? [1, ...num1] : num1;
  }
  return this;
};

BigNum.prototype.mul = function(...numList) {
  if (this.numArr === undefined || this.numArr === null) this.numArr = [];
  let current = null, next;

  for (let n of numList) {
    current = current ? this.numArr : [1];
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
  return this;
};

BigNum.prototype.pow = function(num, exp) {
  this.mul(...new Array(exp).fill(num));
  console.log(this.numArr);
  return this;
};

BigNum.prototype.div = function(...num) {
  if (this.numArr === undefined || this.numArr === null) this.numArr = [];

};
