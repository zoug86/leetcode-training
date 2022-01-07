// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
// Example 1:
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function (numRows) {
    let pascal = [];
    for (let i = 0; i < numRows; i++) {
        pascal[i] = [];
        pascal[i][0] = 1;
        for (let j = 1; j < i; j++) {
            pascal[i][j] = pascal[i - 1][j - 1] + pascal[i - 1][j]
        }
        pascal[i][i] = 1;
    }
    return pascal;
};

console.log(generate(5));