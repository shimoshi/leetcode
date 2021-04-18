/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function(s, t) {
  let longer = s.length > t.length ? s.length : t.length;
  let distance = 0;
  
  for (let i = 0; i < longer; i++) {
    if (s[i] === t[i]) {
      continue;
    } else {
      distance++;
      
      if (s.length > t.length) {
        t = t.substr(0, i) + s[i] + t.substr(i);
      } else if (s.length < t.length) {
        s = s.substr(0, i) + t[i] + s.substr(i);
      }
      
    }
  }
  
  return distance === 1 ? true : false;
};