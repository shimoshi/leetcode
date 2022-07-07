/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const operators = {
        "*": true,
        "+": true,
        "-": true,
        "/": true,
    }
    
    const nums = [];
    
    for (const token of tokens) {
        if (operators[token]) {
            if (token === "+") {
                nums[nums.length - 2] += nums.pop();
            } else if (token === "-") {
                nums[nums.length - 2] -= nums.pop();
            } else if (token === "*") {
                nums[nums.length - 2] *= nums.pop();
            } else if (token === "/") {
                nums[nums.length - 2] /= nums.pop();
                if (nums[nums.length - 1] >= 0) {
                    nums[nums.length - 1] = Math.floor(nums[nums.length - 1]);
                } else {
                    nums[nums.length - 1] = Math.ceil(nums[nums.length - 1])
                }
            }
        } else {
            nums.push(Number(token));
        }
    }
    
    return nums.pop();
};