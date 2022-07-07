/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const map = new Map([
        ["+", function(a, b) { return a + b}],
        ["-", function(a, b) { return a - b}],
        ["*", function(a, b) { return a * b}],
        ["/", function(a, b) { 
            a /= b;
            
            if (a >= 0) {
                a = Math.floor(a);
            } else {
                a = Math.ceil(a);
            }
            
            return a;
        }]
    ]);
    
    const nums = [];
    
    for (const token of tokens) {
        if (map.has(token)) {
            const c2 = nums.pop();
            const c1 = nums.pop();
            nums.push(map.get(token)(c1, c2));
        } else {
            nums.push(Number(token));
        }
    }
    
    return nums.pop();
};