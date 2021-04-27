/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
  for (let i = 0; i < intervals.length; i++) {
    for (let k = i + 1; k < intervals.length; k++) {
      if (intervals[k][0] < intervals[i][0]) {
        if (intervals[k][1] > intervals[i][0]) {
          return false;
        }
      } else {
        if (intervals[k][0] < intervals[i][1]) {
          return false;
        }
      }
    }
  }

  return true;
};