// Project Euler: Problem 19: Counting Sundays
// You are given the following information, but you may prefer to do some research for yourself.

// 1 Jan 1900 was a Monday.
// Thirty days has September,
// April, June and November.
// All the rest have thirty-one,
// Saving February alone,
// Which has twenty-eight, rain or shine.
// And on leap years, twenty-nine.
// A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
// How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?  

// *** Tests ***
// countingSundays(1943, 1946) should return 6.
// countingSundays(1995, 2000) should return 10.
// countingSundays(1901, 2000) should return 171.

function countingSundays(firstYear, lastYear) {
  // Good luck!
  // We can figure out what day of the week is for firstYear by shifting days of the week
  // from Monday 1900. Shifts by one for every year and two on leap years.
  const monthDays = { jan: 31, feb: 28, mar: 31, apr: 30, may: 31, jun: 30, jul: 31, aug: 31, sept: 30, oct: 31, nov: 30, dec: 31 };
  const monthItterable = Object.keys(monthDays);
  //               [false, false, false, false, false, false, true];
  const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  let currentYear = firstYear;
  let daysInterval = (((firstYear - 1900)) + ((firstYear - 1901) / 4) | 0) % weekDays.length;
  let result = 0;

  while (currentYear <= lastYear) {
    for (let m of monthItterable) {
      if (weekDays[daysInterval % 7] === 'sun') result++;
      let days = monthDays[m];
      if (m === 'feb' && currentYear % 4 === 0 && currentYear % 100 !== 0) days++;
      else if (m === 'feb' && currentYear && currentYear % 400 === 0) days++;
      daysInterval += days;
    }
    currentYear++;
  }

  console.log(result);
  return result;
}

countingSundays(1943, 1946);
countingSundays(1995, 2000);
countingSundays(1901, 2000);
