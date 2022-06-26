/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    if (mat.length === 0) {
        return mat;
    }
    
    let width = mat[0].length;
    const dist = Array(mat.length).fill().map(()=>Array(width).fill(Number.MAX_SAFE_INTEGER));
    
    for (let row = 0; row < mat.length; row++) {
        for (let col = 0; col < width; col++) {
            if (mat[row][col] === 0) {
                dist[row][col] = 0;
            } else {
                if (row > 0) {
                    dist[row][col] = Math.min(dist[row][col], dist[row - 1][col] + 1);
                }
                
                if (col > 0) {
                    dist[row][col] = Math.min(dist[row][col], dist[row][col - 1] + 1);
                }
            }
        }
    }
    
    for (let row = mat.length - 1; row >= 0; row--) {
        for (let col = width - 1; col >= 0; col--) {
            if (row < mat.length - 1) {
                dist[row][col] = Math.min(dist[row][col], dist[row + 1][col] + 1);
            }

            if (col < width - 1) {
                dist[row][col] = Math.min(dist[row][col], dist[row][col + 1] + 1);
            }
        }
    }
    
    return dist;
};