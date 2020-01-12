// Project Euler: Problem 18: Maximum path sum I
// By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.

// 3
// 7 4
// 2 4 6
// 8 5 9 3

// That is, 3 + 7 + 4 + 9 = 23.

// Find the maximum total from top to bottom of the triangle below:

//                             75
//                           95 64
//                         17 47 82
//                       18 35 87 10
//                     20 04 82 47 65
//                   19 01 23 75 03 34
//                 88 02 77 73 07 63 67
//               99 65 04 28 06 16 70 92
//             41 41 26 56 83 40 80 70 33
//           41 48 72 33 47 32 37 16 94 29
//         53 71 44 65 25 43 91 52 97 51 14
//       70 11 33 28 77 73 17 78 39 68 17 57
//     91 71 52 38 17 14 91 43 58 50 27 29 48
//   63 66 04 68 89 53 67 30 73 16 69 87 40 31
// 04 62 98 27 23 09 70 98 73 93 38 53 60 04 23

// NOTE: As there are only 16384 routes, it is possible to solve this problem by trying every route. However, Problem 67, is the same challenge with a triangle containing one-hundred rows; it cannot be solved by brute force, and requires a clever method! ;o)

// *** Tests ***
// maximumPathSumI(testTriangle) should return 23.
// maximumPathSumI(numTriangle) should return 1074.

function maximumPathSumI(triangle) {
  // Good luck!
  // This first part just flips the triangle around for easy indexing
  // Start at the bottom and work our way up
  const triAdjusted = [];
  for (let i = triangle.length - 1; i >= 0; i--) {
    let triRow = new Array(i + 1);
    for (let n = 0; n <= i; n++) {
      triRow[n] = triangle[i][n];
    }
    triAdjusted.push(triRow);
  }

  // Start one row up from the bottom
  for (let i = 1; i < triAdjusted.length; i++) {
    for (let n = 0; n < triAdjusted[i].length; n++) {
      triAdjusted[i][n] += triAdjusted[i - 1][n] >= triAdjusted[i - 1][n + 1] ? triAdjusted[i - 1][n] : triAdjusted[i - 1][n + 1];
    }
  }
  // Resulting array triAdjusted has side effect of leaving breadcrumb trail
  // Should one want the path travled
  return triAdjusted.pop()[0];
}

const testTriangle = [[3, 0, 0, 0],
[7, 4, 0, 0],
[2, 4, 6, 0],
[8, 5, 9, 3]];

console.log(maximumPathSumI(testTriangle));
