/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// var groupAnagrams = function(strs) {
//   const copy = strs.slice();
//   const result = [];
//   const sorted = new Array(strs.length);
  
//   for (let i = 0; i < strs.length; i++) {
//     str = strs[i]
//     sorted[i] = str.split('').sort().join('');
//   }
  
//   while (sorted.length) {
//     const bucket = [copy.shift()];
//     let curr = sorted.shift();
    
//     for (let k = 0; k < sorted.length; k++) {
//       if (sorted[k] === curr) {
//         bucket.push(copy[k]);
//         copy.splice(k, 1);
//         sorted.splice(k, 1);
//         k--
//       }
//     }
    
//     result.push(bucket);
//   }
  
//   return result;
// };

var groupAnagrams = function(strs) {
  const map = new Map();
  
  for (let s of strs) {
    const sorted = s.split('').sort().join();
    if (map.has(sorted)) {
      map.set(sorted, [...map.get(sorted), s]);
    } else {
      map.set(sorted, [s]);
    }
  }
  
  return [...map.values()];
}