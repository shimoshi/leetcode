/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if (intervals.length === 0) {
        return [newInterval];
    }
    
    let left = 0;
    let right = intervals.length - 1;
    let zero;
    let one;
    
    while (left <= right) {
        if (newInterval[0] <= intervals[left][0]) {
            if (newInterval[1] >= intervals[left][0]) {
                zero = newInterval[0];
                break;
            } else {
                intervals.splice(left, 0, newInterval);
                return intervals;
            }
            
        } else {
            if (newInterval[0] <= intervals[left][1]) {
                if (newInterval[1] <= intervals[left][1]) {
                    return intervals;
                } else {
                    zero = intervals[left][0];
                    break;
                }
            }
        }
            
        left++;
    }
    
    if (zero === undefined) {
        return [...intervals, newInterval];
    }
    
    while (left <= right) {
        if (newInterval[1] >= intervals[right][1]) {
            one = newInterval[1];
            break;
        } else if (newInterval[1] >= intervals[right][0]) {
            one = intervals[right][1];
            break;
        }
        
        right--;
    }
    
    intervals.splice(left, right - left + 1, [zero, one]);
    
    return intervals;
};