function largestPrimeFactor(number) {
  // Good luck!

  let divisor = 2;
  let result = 0;

  while(number !== 0) {
    if(number % divisor !== 0) {
      divisor++;
    }
    else {
      result = number;
      number /= divisor;
      if(number === 1) {
        break;
      }
    }
  }
  return result;
}

//largestPrimeFactor(13195);
