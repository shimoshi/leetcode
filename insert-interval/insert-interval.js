/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  if (intervals.length === 0) return [newInterval];
  
  for (var i = 0; i < intervals.length; i++) {
    if (newInterval[0] <= intervals[i][0]) {
      intervals.splice(i, 0, newInterval);
      break;
    }
  }
  
  if (i === intervals.length) {
    intervals.push(newInterval);
    i--;
  }
  if (i > 0) i--;
  
  while (i < intervals.length - 1) {
    let curr = intervals[i];
    let next = intervals[i + 1];
    
    if (curr[1] >= next[0]) {
      let upper = curr[1] >= next[1] ? curr[1] : next[1];
      intervals.splice(i, 2, [curr[0], upper]);
    }
    else i++;
  }
  
  return intervals;
};