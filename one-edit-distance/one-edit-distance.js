/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function(s, t) {
  let distance = 0;
  
  if (s.length === t.length) {
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== t[i]) distance++;
      if (distance > 1) return false;
    }
  } else {
    let longer = s.length >= t.length ? s : t;
    let shorter = s.length >= t.length ? t : s;
  
    for (let i = 0; i < longer.length; i++) {
      if (longer[i] !== shorter[i - distance]) distance++;
      if (distance > 1) return false;
    }
  }
  
  return distance === 1 ? true : false;
};