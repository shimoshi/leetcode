/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const copy = strs.slice();
  const result = [];
  const sorted = new Array(strs.length);
  
  for (let i = 0; i < strs.length; i++) {
    str = strs[i]
    sorted[i] = str.split('').sort().join('');
  }
  
  while (sorted.length) {
    let curr = sorted.shift();
    const bucket = [copy.shift()];
    
    for (let k = 0; k < sorted.length; k++) {
      if (sorted[k] === curr) {
        bucket.push(copy[k]);
        sorted.splice(k, 1);
        copy.splice(k, 1)
        k--
      }
    }
    
    result.push(bucket);
  }
  
  return result;
};