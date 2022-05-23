/**
 * 
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places 6 after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to 10 pov -4 are acceptable.

Example:

arr = [1,1,0,-1,-1]

There are n=5 elements, two positive, two negative and one zero. Their ratios are 2/5 = 0.400000, 2/5=0.400000 and 1/5= 0.200000 . Results are printed as:
0.400000
0.400000
0.200000

 */

function plusMinus(arr) {
    let arrLength = arr.length
    let negativeEl = []
    let zeroEl = []
    let positiveEl = []
    for (let i = 0; i < arrLength; i++) {
        if (arr[i] > 0) {
            positiveEl.push(arr[i])
        } else if (arr[i] < 0) {
            negativeEl.push(arr[i])
        } else {
            zeroEl.push(arr[i])
        }
    }
    console.log(positiveEl.length / arrLength)
    console.log(negativeEl.length / arrLength)
    console.log(zeroEl.length / arrLength)
}
plusMinus([1, 1, 0, -1, -1])