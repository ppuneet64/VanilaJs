//Q. Check if 2nd array have array first squred values in second array with same element frequency
// Examples
//     1 : [1,2,3] [1,4,9] == > true 1**2 == 1, 2**2 == 4,  3**2 = 9
//     2 : [1,2,3] [1,4,6] == > false 
//     3 : [1,2,2,3,5] [1,4,6] == > false length is not same
//     3 : [1,2,2,3,5] [1,4,9, 25, 4] == > false length is not same
//   

//Solution Brute Force O(n^2)

function hasSquredEl(array1, array2) {
    if (array1.length !== array2.length) return false
    for (const el of array1) {
        let sqre = el ** 2
        let secondIndx = array2.indexOf(sqre)
        if (secondIndx === -1) return false
        array2.splice(secondIndx, 1)
    }
    return true
}

//Solution O(n)
function hasSquredEl1(array1, array2) {
    if (array1.length !== array2.length) return false
    //Create Object from both array
    const fArr = {}
    const sArr = {}
    array1.forEach(el => {
        fArr[el] = fArr[el] ? fArr[el] + 1 : 1
    })
    array2.forEach(el => {
        sArr[el] = sArr[el] ? sArr[el] + 1 : 1
    })
    for (const el of array1) {
        //Check if Squred element is exist in array 2
        if (!(el ** 2) in sArr) {
            return false
        }
        //Check if Squred element is exist in array 2 with same qccurence
        if (fArr[el] !== sArr[el ** 2]) {
            return false
        }
    }
    return true
}


function hasSquredEl2(array1, array2) {
    if (array1.length !== array2.length) return false
    let firstSum = array1.reduce((acc, cur) => acc + (cur ** 2), 0)
    let lastSum = array2.reduce((acc, cur) => acc + cur, 0)
    return firstSum === lastSum
}

console.log(hasSquredEl([1, 2, 3, 5, 2], [1, 4, 25, 9, 4]))
console.log(hasSquredEl2([1, 2, 3, 5, 2], [1, 4, 25, 9, 4]))