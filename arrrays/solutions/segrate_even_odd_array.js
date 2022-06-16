function segregateEvenOdd(arr) {
    /* Initialize left and right indexes */
    var left = 0,
        right = arr.length - 1
    while (left < right) {
        while (arr[left] % 2 == 0 && left < right) left++
        while (arr[right] % 2 == 1 && left < right) right--
        if (left < right) {
            /* Swap arr[left] and arr[right]*/
            var temp = arr[left]
            arr[left] = arr[right]
            arr[right] = temp
            left++
            right--
        }
    }
    return arr
}

function segregateEvenOdd1(arr) {
    const even = arr.filter(el => el % 2 === 0)
    const odd = arr.filter(el => el % 2 === 1)
    return [...even, ...odd]
}

var arr = [12, 34, 45, 9, 8, 90, 3]
//console.log('before : ', arr)
console.log(segregateEvenOdd(arr))
console.log(segregateEvenOdd(arr))

//console.log('after : ', arr)