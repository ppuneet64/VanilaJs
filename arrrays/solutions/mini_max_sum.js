/**
 * 
 Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

 Example:
 arr=[1,3,5,7,9]
 The minimum sum is 1+3+5+7=16 and the maximum sum is 3+5+7+9=24

 Explanation : Minimum sum must be the sum of minimum numbers in array and Maximum sum would be the sum of max numbers in array
 */

function miniMaxSum(arr) {
    //Solution 1 With Loop
    //let minSum = 0, maxSum = 0;
    // const sorted = arr.sort()
    // for(let i=0; i< sorted.length; i++){
    //     if(i< sorted.length - 1 ){
    //         minSum+=arr[i]
    //     }
    //     if(i>0){
    //         maxSum+=sorted[i]
    //     }
    // }
    //SHort Solution 
    let sum = arr.reduce((acc, cur) => acc + cur)
    let max = Math.max(...arr)
    let min = Math.min(...arr)
    console.log(sum - max, sum - min)
}
miniMaxSum([1, 3, 5, 7, 9])