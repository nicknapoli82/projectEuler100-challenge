// Project Euler: Problem 26: Reciprocal cycles
// A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:

// 1/2 = 0.5
// 1/3 = 0.(3)
// 1/4 = 0.25
// 1/5 = 0.2
// 1/6 = 0.1(6)
// 1/7 = 0.(142857)
// 1/8 = 0.125
// 1/9 = 0.(1)
// 1/10 = 0.1
// Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle.

// Find the value of d < n for which 1/d contains the longest recurring cycle in its decimal fraction part.

// *** Tests ***
// reciprocalCycles(700) should return 659.
// reciprocalCycles(800) should return 743.
// reciprocalCycles(900) should return 887.
// reciprocalCycles(1000) should return 983.

function reciprocalCycles(n) {
  // Good luck!
  let LIMIT = n * 2;
  let test = 0;
  let result = [];
  let greatestRepeat = 0;
  for (let i = 1; i <= n; i++) {
    let numerator = 10;
    let temp = [];
    let lastRemainder = 0;
    while (numerator * 10 < i) {
      temp.push(0);
      numerator *= 10;
    }
    temp.push(numerator / i | 0);
    let remainder = 10 - (temp[0] * i);
    while (LIMIT && remainder) {
      remainder *= 10;
      temp.push(remainder / i | 0);
      remainder = remainder - (temp[temp.length - 1] * i);
      if (lastRemainder === 1 && remainder === 1) {
        break;
      }
      lastRemainder = remainder;
      LIMIT--;

      if (remainder === 1) {
        let repeat = detectRepeat(temp);
        if (repeat) {
          if (repeat > greatestRepeat) {
            test = i;
            greatestRepeat = repeat;
            result = temp.slice(0, temp.length - repeat);
          }
          //          console.log(i, repeat, temp.slice(0, temp.length - repeat).length);
          if (repeat > 1)
            break;
        }
      }
    }
    LIMIT = n * 2;
  }
  console.log(test);
  return test;
}

function detectRepeat([...arr]) {
  if (arr.length <= 1) return 0;
  arr.reverse();
  let collector = [];
  let isRepeating = false;
  const lookAhead = function(start) {
    let isEqual = true;
    for (let idx = 0; idx < collector.length; idx++) {
      if (collector[idx] !== arr[start + idx])
        return false;
    }
    return true;
  };

  let maxRepeating = 0;
  for (let i = 0; i < arr.length; i++) {
    collector.push(arr[i]);
    if (lookAhead(i + 1)) maxRepeating = collector.length;
  }
  return maxRepeating;
}

reciprocalCycles(700);
reciprocalCycles(800);
reciprocalCycles(900);
reciprocalCycles(1000);
