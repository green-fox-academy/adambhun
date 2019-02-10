
'use strict';

// Create a function named `rotateMatrix` that takes an n×n integer matrix (array of arrays) as parameter
// and returns a matrix which elements are rotated 90 degrees clockwise.

const matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

function rotateMatrix (matrix: number [][]) {
  //have to initialize array first
  let newMatrix: number [][] = [];
  for (let x:number = 0; x < matrix.length; x++) {
    newMatrix.push([]);
  }
//inner
  for (let x: number = 0; x < matrix.length; x++) {
    //outer
    for (let y: number = 0; y < matrix.length; y++) {
      newMatrix[x][y] = matrix[matrix.length-y-1][x];
    }
  }
  return newMatrix;
  };

console.log(rotateMatrix(matrix));


// console.log(rotateMatrix(matrix));
// should print (in one line):
// [ [ 7, 4, 1 ],
//   [ 8, 5, 2 ],
//   [ 9, 6, 3 ] ]