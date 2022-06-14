/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    if (image[sr][sc] === newColor) {
        return image;
    }
    
    let currentColor = image[sr][sc];
    image[sr][sc] = newColor;
    
    // check up
    if (sr - 1 >= 0 && image[sr - 1][sc] === currentColor) {
        floodFill(image, sr - 1, sc, newColor);
    }
    
    // check right
    if (sc + 1 < image[sr].length && image[sr][sc + 1] === currentColor) {
        floodFill(image, sr, sc + 1, newColor);
    }
    
    // check down
    if (sr + 1 < image.length && image[sr + 1][sc] === currentColor) {
        floodFill(image, sr + 1, sc, newColor);
    }
    
    // check left
    if (sc - 1 >= 0 && image[sr][sc - 1] === currentColor) {
        floodFill(image, sr, sc - 1, newColor);
    }
    
    return image;
};