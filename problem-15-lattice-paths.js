// Project Euler: Problem 15: Lattice paths
// Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

// a diagram of 6 2 by 2 grids showing all the routes to the bottom right corner

// How many such routes are there through a given gridSize?

// *** Tests ***
// latticePaths(4) should return 70.
// latticePaths(9) should return 48620.
// latticePaths(20) should return 137846528820.

function latticePaths(gridSize) {
  // Good luck!
  const gridValues = new Array(gridSize).fill([]);
  // Set up the grid
  gridValues.forEach((_, i, a) => {
    a[i] = new Array(gridSize).fill(0);
  });
  for (let i = 0; i < gridSize; i++) {
    gridValues[0][i] = i + 2;
    gridValues[i][0] = i + 2;
  }

  // Fill in the grid
  for (let i = 1; i < gridSize; i++) {
    for (let j = 1; j < gridSize; j++) {
      gridValues[i][j] = (gridValues[i][j - 1]) + (gridValues[i - 1][j]);
    }
  }
  console.log(gridValues[gridSize - 1][gridSize - 1]);
  return gridValues[gridSize - 1][gridSize - 1];
}

latticePaths(4);
latticePaths(9);
latticePaths(20);
