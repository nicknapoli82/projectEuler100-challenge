// Project Euler: Problem 17: Number letter counts
// If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

// If all the numbers from 1 to given limit inclusive were written out in words, how many letters would be used?

// NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.

// numberLetterCounts(5) should return 19.
// numberLetterCounts(150) should return 1903.
// numberLetterCounts(1000) should return 21124.

function numberLetterCounts(limit) {
  // Good luck!
  let result = 0;
  for (let i = 1; i <= limit; i++) {
    result += doTheNumber(i);
  }
  return result;
}

function doTheNumber(num) {
  let ones, tens, hundreds, tempNum, result;
  tempNum = num % 100;
  hundreds = num > 99 ? numWordLength(((num / 100) | 0) % 10) : 0;

  if (tempNum > 9 && tempNum < 20) {
    tens = numWordLength(tempNum);
    ones = 0;
  }
  else {
    tens = num > 9 ? numWordLength(((tempNum / 10) | 0) * 10) : 0;
    ones = numWordLength(tempNum % 10);
  }

  result = ones + tens + hundreds;
  result += extraWords(num);

  num = (num / 1000) | 0;
  while (num > 0) {
    tempNum = num % 100;
    hundreds = num > 99 ? numWordLength(((num / 100) | 0) % 10) : 0;

    if (tempNum > 9 && tempNum < 20) {
      tens = numWordLength(tempNum);
      ones = 0;
    }
    else {
      tens = num > 9 ? numWordLength(((tempNum / 10) | 0) * 10) : 0;
      ones = numWordLength(tempNum % 10);
    }

    result += ones + tens + hundreds;

    num = (num / 1000) | 0;
  }
  return result;
}

function extraWords(n) {
  let extra = 0;
  const HUNDRED = 7;
  const THOUSAND = 8;
  const MILLION = 7;
  const AND = 3;
  if (!(n % 1000000)) {
    return MILLION;
  }
  if (!(n % 100000)) {
    return THOUSAND + HUNDRED;
  }
  if (!(n % 1000)) {
    return THOUSAND;
  }
  if (!(n % 100)) {
    return HUNDRED;
  }
  if (n > 100 && n % 100) {
    extra += HUNDRED + AND;
  }
  if (n > 1000 && n < 1000000) {
    extra += THOUSAND;
  }
  if (n > 1000000) {
    extra += MILLION;
  }
  return extra;
}

function numWordLength(num) {
  switch (num) {
    case 1: return 3; // one
    case 2: return 3; // two
    case 3: return 5; // three
    case 4: return 4; // four
    case 5: return 4; // five
    case 6: return 3; // six
    case 7: return 5; // seven
    case 8: return 5; // eight
    case 9: return 4; // nine
    case 10: return 3; // ten
    case 11: return 6; // eleven
    case 12: return 6; // twelve
    case 13: return 8; // thirteen
    case 14: return 8; // fourteen
    case 15: return 7; // fifteen
    case 16: return 7; // sixteen
    case 17: return 9; // seventeen
    case 18: return 8; // eighteen
    case 19: return 8; // nineteen
    case 20: return 6; // twenty
    case 30: return 6; // thirty
    case 40: return 5; // forty
    case 50: return 5; // fifty
    case 60: return 5; // sixty
    case 70: return 7; // seventy
    case 80: return 6; // eighty
    case 90: return 6; // ninety
    default: return 0;
  };
}

console.log(numberLetterCounts(5));
console.log(numberLetterCounts(150));
console.log(numberLetterCounts(1000));
// numberLetterCounts(5) should return 19.
// numberLetterCounts(150) should return 1903.
// numberLetterCounts(1000) should return 21124.
