/**
 * 
 * 
 * 
    You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

    Example : [4,4,1,3]

    The maximum height candles are 4 units high. There are  2 of them, so return 2.

    Function Description

    Complete the function birthdayCakeCandles in the editor below.

    birthdayCakeCandles has the following parameter(s): ==> int candles[n]: the candle heights
    Returns ==> int: the number of candles that are tallest
    Input Format

    The first line contains a single integer, , the size of .
    The second line contains  space-separated integers, where each integer  describes the height of .
 */

function birthdayCakeCandles(candles) {
    let max = Math.max(...candles)
    let count = 0
    candles.forEach(el => {
        if (el === max) {
            count++
        }
    })
    return count
}
console.log(birthdayCakeCandles([4, 4, 1, 3]));