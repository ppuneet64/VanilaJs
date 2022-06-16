// output => [[4,10], [1,5], [2,1]]

const sortArr = (arr) => {
    return arr.sort((a, b) => b[1] - a[1])
}
console.log(sortArr([[1, 5], [2, 1], [4, 10]]))

const sortArr = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i][1] < arr[j][1]) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}
console.log(sortArr([[1, 5], [2, 1], [4, 10]]))