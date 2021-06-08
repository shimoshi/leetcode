/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
  let dict = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9
  }
  
  let first = '';
  
  for (let letter of firstWord) {
    first += dict[letter];
  }
  
  let second = '';
  
  for (let letter of secondWord) {
    second += dict[letter];
  }
  
  let target = '';
  
  for (let letter of targetWord) {
    target += dict[letter];
  }
  
  return Number(first) + Number(second) === Number(target);
};