// Project Euler: Problem 14: Longest Collatz sequence
// The following iterative sequence is defined for the set of positive integers:

// n → n/2 (n is even)
// n → 3n + 1 (n is odd)
// Using the rule above and starting with 13, we generate the following sequence:

// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

// Which starting number, under the given limit, produces the longest chain?

// NOTE: Once the chain starts the terms are allowed to go above one million.

// *** Tests ***
// longestCollatzSequence(14) should return 9.
// longestCollatzSequence(5847) should return 3711.
// longestCollatzSequence(46500) should return 35655.
// longestCollatzSequence(54512) should return 52527.
// longestCollatzSequence(100000) should return 77031.

function longestCollatzSequence(limit) {
  // Good luck!
  const nEven = (n) => {
    return n / 2;
  };
  const nOdd = (n) => {
    return 3 * n + 1;
  };
  const determineNextTerm = (n) => {
    return n % 2 ? nOdd(n) : nEven(n);
  };
  const chainLengthFromNumber = (n) => {
    let cLength = 1;
    while (n !== 1) {
      cLength++;
      n = determineNextTerm(n);
    }
    return cLength;
  };

  let result = 0;
  let longest = 0;
  for (let i = 1; i < limit; i++) {
    let test = chainLengthFromNumber(i);
    if (test > longest) {
      longest = test; result = i;
    }
  }
  console.log(result);
  return result;
}

longestCollatzSequence(14);
