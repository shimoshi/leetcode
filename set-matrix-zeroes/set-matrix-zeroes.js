/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  let isCol = false;
  
  // set flags if column and row contains 0
  for (let r = 0; r < matrix.length; r++) {
    if (matrix[r][0] === 0) isCol = true;
    
    for (let c = 1; c < matrix[r].length; c++) {
      if (matrix[r][c] === 0) {
        matrix[r][0] = 0;
        matrix[0][c] = 0;
      }
    }
  }
  
  // use flags to set cells to 0
  for (let r = 1; r < matrix.length; r++) {
    for (let c = 1; c < matrix[0].length; c++) {
      if (matrix[r][0] === 0 || matrix[0][c] === 0) {
        matrix[r][c] = 0;
      }
    }
  }
  
  // set first row to 0 if applicable
  if (matrix[0][0] === 0) {
    for (let c = 0; c < matrix[0].length; c++) {
      matrix[0][c] = 0;
    }
  }
  
  // set first col to 0 if applicable
  if (isCol) {
    for (let r = 0; r < matrix.length; r++) {
      matrix[r][0] = 0;
    }
  }
};