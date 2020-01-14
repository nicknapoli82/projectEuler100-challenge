function multiplesOf3and5(number) {
  // Good luck!
  let num = 0;
  for (let i = 0; i < number; i++) {
    if(i%3 === 0 || i%5 === 0)
      num += i;
  }
  return num;
}

multiplesOf3and5(1000);
