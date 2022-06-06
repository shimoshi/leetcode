/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const map = new Map();
    map.set('(', ')');
    map.set('{', '}');
    map.set('[', ']');

    let stack = [];
    
    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(map.get(char));
        } else {
            if (char !== stack.pop()) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
};