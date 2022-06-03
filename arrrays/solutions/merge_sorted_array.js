const mergeSortedArray = (a, b) => {
    var tempArray = [];
    while (a.length || b.length) {
        if (typeof a[0] === 'undefined') {
            tempArray.push(b[0]);
            b.splice(0, 1);
        } else if (a[0] > b[0]) {
            tempArray.push(b[0]);
            b.splice(0, 1);
        } else {
            tempArray.push(a[0]);
            a.splice(0, 1);
        }
    }
    return tempArray;
}
console.log(mergeSortedArray([1, 2, 3, 5, 9], [4, 6, 7, 8, 9]));