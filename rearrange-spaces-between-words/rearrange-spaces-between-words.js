/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {
  let spaceCount = 0;
  let word = '';
  let words = [];
  
  for (let char of text) {
    if (char === ' ') {
      if (word.length > 0) {
        words.push(word);
        word = '';
      }
      spaceCount++;
    } else {
      word += char;
    }
  }
  
  if (word.length > 0) words.push(word);

  if (words.length <= 1) {
    return words[0] + ' '.repeat(spaceCount);
  } else {
    let excess = spaceCount % (words.length - 1);
    let gap = Math.floor(spaceCount / (words.length - 1));
    return words.join(' '.repeat(gap)) + ' '.repeat(excess);
  }
};