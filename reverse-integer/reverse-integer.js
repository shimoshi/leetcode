/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var input = x.toString()
    var result = "";
    
    if (input[0] === "-") {
        result += "-";
        input = input.slice(1);
    }
    
    for (var i = input.length - 1; i >= 0; i--) {
        result += input[i];
    }
    
    if (Math.abs(Number(result)) <= (2147483647)) {
        return Number(result);
    } else {
        return 0;
    }
};