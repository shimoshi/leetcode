/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n, posY = 0, posX = 0, memo = {}) {
  let count = 0;
  if (posY + ',' + posX in memo) return memo[posY + ',' + posX];
  
  //complete
  if (posY === m - 1 && posX === n - 1) return 1;
  
  //go down
  if (posY < m) {
    count += uniquePaths(m, n, posY + 1, posX, memo);
  }
  //go right
  if (posX < n) {
    count += uniquePaths(m, n, posY, posX + 1, memo);
  }
  
  memo[posY + ',' + posX] = count;
  
  return count;
};