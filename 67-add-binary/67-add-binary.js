/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let carry = 0;
    let aIndex = a.length - 1;
    let bIndex = b.length - 1;
    let result = "";
    
    while (aIndex >= 0 || bIndex >= 0) {
        let ai = (aIndex >= 0 && a[aIndex] === "1") ? 1 : 0;
        let bi = (bIndex >= 0 && b[bIndex] === "1") ? 1 : 0;
        
        let sum = ai + bi + carry;
        carry = sum > 1 ? 1 : 0;
        let ci = sum % 2;
        
        result = ci.toString() + result;
        
        aIndex--;
        bIndex--;
    }
    
    if (carry) {
        result = carry.toString() + result;
    }
    
    return result;
};