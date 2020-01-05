// Project Euler: Problem 4: Largest palindrome product
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two n-digit numbers.

// *** Tests ***
// largestPalindromeProduct(2) should return 9009.
// largestPalindromeProduct(3) should return 906609.

function largestPalindromeProduct(n) {
  // Good luck!
  let num1 = 1, num2 = 1;
  
  for(let i = 0; i < n; i++) {
    num2 *= 10;
  }
  num1 = num2 -= 1;
  const top = num1;

  let test = num1 * num2;
  let result = 0;

  while (true) {
    if(num2 < num1) {
      num2 = top;
      num1--;
      if(num1 * num2 < result) break;
    }
    else num2--;

    test = num1 * num2;
    if(isPalindrome(test)){
      if(test > result) result = test;
    }
  }
  console.log(result);
  return result;
}

function isPalindrome(n) {
  let test = Number(n.toString().split('').reverse().join(''));
  return n === test ? true : false;
}

largestPalindromeProduct(3);
