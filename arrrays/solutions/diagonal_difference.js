/**
 * 
 Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix arr is shown below:
1 2 3
4 5 6
9 8 9 
The left-to-right diagonal = 1+5+9=15. The right to left diagonal 3+5+9 = 17. Their absolute difference is 17-15=2

 */


/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    let diff = 0
    let first = 0
    let second = 0

    for (let i = 0; i < arr.length; i++) {
        first += arr[i][i]
        second += arr[i][arr[i].length - (i + 1)]
    }
    return Math.abs(first - second);
}
diagonalDifference([[1, 2, 3], [4, 5, 6], [9, 8, 9]])