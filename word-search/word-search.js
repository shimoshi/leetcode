/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word, curr = [0,0]) {
  if (curr[0] === board.length);
  
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      if (board[r][c] === word[0] && checkAdjacent(r, c, word)) return true;
    }
  }
  
  return false;
    
  function checkAdjacent(row, col, w) {
    if (board[row][col] !== w[0]) return false;
    if (w.length === 1) return true;
    
    let temp =w[0];
    board[row][col] = 0;
    let newWord = w.slice(1);
    
    if (row - 1 >= 0 && checkAdjacent(row - 1, col, newWord)) return true;
    if (col + 1 < board[0].length && checkAdjacent(row, col + 1, newWord)) return true;
    if (row + 1 < board.length && checkAdjacent(row + 1, col, newWord)) return true;
    if (col - 1 >= 0 && checkAdjacent(row, col - 1, newWord)) return true;
    
    board[row][col] = temp;
    return false;
  }
};