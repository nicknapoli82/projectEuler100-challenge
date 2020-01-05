function fiboEvenSum(n) {
  // You can do it!
  let result = 0;
  let current = 1;
  let previous = 0;

  for(let i = 0; i < n; i++) {
    let next = current + previous;
    previous = current;
    current = next;
    if(next%2 === 0)
      result += next;
    console.log("n = ", n, " | result = ", result);
  }

  return result;
}

fiboEvenSum(10);
