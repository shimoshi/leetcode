/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  let n = matrix.length;
  
  for (let i = 0; i < Math.floor((n + 1) / 2); i++) {
    for (let k = 0; k < Math.floor(n / 2); k++) {
      let temp = matrix[n - 1 - k][i];
      matrix[n - 1 - k][i] = matrix[n - 1 - i][n - 1 - k];
      matrix[n - 1 - i][n - 1 - k] = matrix[k][n - 1 - i];
      matrix[k][n - 1 - i] = matrix[i][k];
      matrix[i][k] = temp;
    }
  }
};