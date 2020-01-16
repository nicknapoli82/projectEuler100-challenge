// Project Euler: Problem 24: Lexicographic permutations
// A permutation is an ordered arrangement of objects. For example, 3124 is one possible
// permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically
// or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

// 012   021   102   120   201   210
// What is the nth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?

// *** Tests ***
// lexicographicPermutations(699999) should return 1938246570.
// lexicographicPermutations(899999) should return 2536987410.
// lexicographicPermutations(900000) should return 2537014689.
// lexicographicPermutations(999999) should return 2783915460.

function lexicographicPermutations(n) {
  // Good luck!
  const set = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const factorialSet = [362880, 40320, 5040, 720, 120, 24, 6, 2, 1, 0];
  // !10 = 3628800 | n > means no result possible
  if (n > 3628800) return null;

  let workingNum = n;

  for (let i = 0; i < set.length; i++) {
    if (n < factorialSet[i]) continue;
    workingNum = (n / factorialSet[i]) | 0;
    let temp = set[i + workingNum];
    for (let j = i + workingNum; j > i; j--) {
      set[j] = set[j - 1];
    }
    set[i] = temp;
    n -= workingNum * factorialSet[i];
  }

  console.log(set);
  return set;
}
lexicographicPermutations(699999); // should return 1938246570.
lexicographicPermutations(899999); // should return 2536987410.
lexicographicPermutations(900000); // should return 2537014689.
lexicographicPermutations(999999); // should return 2783915460.
