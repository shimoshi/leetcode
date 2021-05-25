/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let islands = 0;
  
  for (let i = 0; i < grid.length; i++) {
    for (let k = 0; k < grid[i].length; k++) {
      if (grid[i][k] === '1') {
        islands++;
        searchIsland(i, k);
      }
    }
  }
  
  return islands;
  
  function searchIsland(r, c) {
    if (grid[r][c] === '1') {
      grid[r][c] = '0';
    } else {
      return;
    }
    
    // check left
    if (c - 1 >= 0) {
      searchIsland(r, c - 1);
    }
    
    // check up
    if (r - 1 >= 0) {
      searchIsland(r - 1, c);
    }
    
    // check right
    if (c + 1 < grid[r].length) {
      searchIsland(r, c + 1);
    }
    
    // check down
    if (r + 1 < grid.length) {
      searchIsland(r + 1, c);
    }
  }
};