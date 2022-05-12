// https://www.hackerrank.com/challenges/diagonal-difference/problem
/* 
Given a square matrix (2d array) of integers
Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/

const squareMatrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
];
const expected1 = 2;
/* 
left to right diagonal: 1 + 5 + 9 = 15
right to left diagonal: 3 + 5 + 9 = 17
absolute difference = 2
*/

const squareMatrix2 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
];
const expected2 = 0;
/* 
left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
absolute difference = 0
*/
const squareMatrix3 = [
        [1,2,3,4,5,6,7],
        [1,2,3,4,5,6,7],
        [1,2,3,4,5,6,7],
        [1,2,3,4,5,6,7],
        [1,2,3,4,5,6,7],
        [1,2,3,4,5,6,7],
        [1,2,3,4,5,6,7]
]

/**
 * Calculates the absolute diagonal difference of a square matrix.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Array<number>>} sqrMatrix A 2d array of numbers representing
 *    a square matrix (rows and columns).
 * @returns {number} Represents the absolute difference between the top left to
 *    bottom right diagonal and the top right to bottom left diagonal.
 */
function diagonalDifference(sqrMatrix) {
    var leftidx = 0;
    var rightidx = sqrMatrix.length-1;
    var leftsum = 0;
    var rightsum = 0;
    var row = 0;
    // console.log("Right idx: ", rightidx)
    
    while(leftidx != rightidx)
    {
        // console.log(row)
        leftsum += sqrMatrix[row][leftidx];
        rightsum += sqrMatrix[row][rightidx];
        row++;
        leftidx++;
        rightidx--;
    }
    while(rightidx != -1){
        // console.log("on second while loop.", row)
        leftsum += sqrMatrix[row][leftidx];
        rightsum += sqrMatrix[row][rightidx];
        row++;        
        leftidx++;
        rightidx--;
    }

    
    return Math.abs(leftsum-rightsum);
}

console.log(diagonalDifference(squareMatrix1))
console.log(diagonalDifference(squareMatrix2))
console.log(diagonalDifference(squareMatrix3))







