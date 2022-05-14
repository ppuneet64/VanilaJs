/**
 * Custom Array Splice Method
 * @param {number} index Index to Start Filling Array Items
 * @param {number} removeCount Number of elements to remove
 * @param  {array} items Array items to add in Existing Array
 * 
 * @returns Removed Items Array
 */
Array.prototype.pSplice = function (index = 0, removeCount, ...items) {
    let position = index;
    let deleteCount = 0;
    let removedItems = []
    let beforeItems = []
    let afterItems = []
    let self = this
    //Check if starting index is greater then array length than initiate position to array length
    if (index > self.length) {
        position = self.length
    }
    //Check if starting index is negative then position will be started from end of the array to calculate that add index to array length to get actual position from end
    if (index < 0) {
        let start = self.length + index
        position = start > 0 ? start : 0
    }
    deleteCount = removeCount ?? self.length - position
    //Set remove end index to determine how many items will be removed after ${beforeItems} to calculate that we need to add starting position + remove count
    let removeEndIndex = position + deleteCount
    //Loop over array items to fill data in before and after items
    for (let i = 0; i < self.length; i++) {
        //if i is lesser then position it meanse item will fall under beforeItems
        if (i < position) {
            beforeItems.push(self[i])
        }
        //if i is greater or equal to position and less then removeEndIndex it meanse item falls under removed elements
        if (i >= position && i < removeEndIndex) {
            removedItems.push(self[i])
        }
        //if i is greater of equal to removeEndIndex it meanse item will fall under afterItems
        if (i >= removeEndIndex) {
            afterItems.push(self[i])
        }
    }

    const result = [...beforeItems, ...items, ...afterItems]
    self.length = result.length
    console.log(result);
    //Create Elements after combining all items to same refrenced array
    for (let i = 0; i < result.length; i++) {
        self[i] = result[i]
    }
    return removedItems
}

/**
 * Custom Array Slice Method
 * @param {number} start Index to Start copy Array Items
 * @param {number} end Index to end array copying 
 * 
 * @returns Shallow Copied  Array
 */
Array.prototype.pSlice = function (start, end) {
    let result = []
    let startIndex = start
    let endIndex = end || this.length
    //If start is greater than the index range of the sequence, an empty array is returned.
    if (start >= this.length || end === 0) {
        return result
    }
    //If start is undefined, slice starts from the index 0.
    if (start === undefined) {
        startIndex = 0
    }
    //A negative index can be used, indicating an offset from the end of the sequence. slice(-2) extracts the last two elements in the sequence.
    if (start < 0) {
        startIndex = this.length + start
        startIndex = startIndex > 0 ? startIndex : 0
    }
    //If end is omitted, slice extracts through the end of the sequence (arr.length).
    if (end === undefined) {
        endIndex = this.length
    }
    //A negative index can be used, indicating an offset from the end of the sequence. slice(2,-1) extracts the third element through the second-to-last element in the sequence.
    if (end < 0) {
        endIndex = this.length + end
    }
    // if ending index is less than or equal to 0 then return empty array
    if (endIndex <= 0) {
        return result
    }
    for (let i = 0; i < this.length; i++) {
        if (i >= startIndex && i < endIndex) {
            result.push(this[i])
        }
    }
    return result
}

/**
 * Find Duplicates in Array
 * 
 * @returns Duplicate Array Elements
 */
Array.prototype.duplicates = function () {
    const duplicatesEl = []
    const uniqueEl = new Set()
    for (let i = 0; i < this.length; i++) {
        if (uniqueEl.has(this[i])) {
            duplicatesEl.push(this[i])
        } else {
            uniqueEl.add(this[i])
        }
    }
    return duplicatesEl
}

/**
 * Find Unique Array
 * 
 * @returns Unique Array Elements
 */
Array.prototype.unique = function () {
    const uniqueEl = new Set()
    for (let i = 0; i < this.length; i++) {
        if (!uniqueEl.has(this[i])) {
            uniqueEl.add(this[i])
        }
    }
    return [...uniqueEl]
}

/**
 * Find Duplicates in Array
 * 
 * @returns Duplicate Array Elements
 */
Array.prototype.flattern = function () {
    let res = []
    //Using For Loop
    // for (let i = 0; i < this.length; i++) {
    //     if (Array.isArray(this[i])) {
    //         res = [...res, ...this[i].flattern()]
    //     } else {
    //         res = [...res, this[i]]
    //     }
    // }

    //Using Foreach
    // this.forEach(el => {
    //     if (Array.isArray(el)) {
    //         res = [...res, ...el.flattern()]
    //     } else {
    //         res = [...res, el]
    //     }
    // })

    //Using Reduce Method
    res = this.reduce((acc, current) => acc.concat(Array.isArray(current) ? current.flattern(current) : current), [])
    return res
}

/**
 * Find Minimum Number in Array
 * 
 * @returns Minimum Element
 */
Array.prototype.min = function () {
    //Using For Loop
    /**
    let min = this[0]
    for (let i = 0; i < this.length; i++) {
        if (min > this[i]) {
            min = this[i]
        }
    }
    return min
    */
    //Using Reduce Method
    return this.reduce((a, b) => a > b ? b : a)
}

/**
 * Find Minimum Number in Array
 * 
 * @returns Minimum Element
 */
Array.prototype.max = function () {
    //Using For Loop
    // let max = 0
    // for (let i = 0; i < this.length; i++) {
    //     if (max < this[i]) {
    //         max = this[i]
    //     }
    // }
    // return max
    //Using Reduce Method
    return this.reduce((a, b) => a < b ? b : a)
}

/**
 * Get Pairs of Each Element in Array
 * 
 * @returns Pair Counts
 */
Array.prototype.pairCount = function () {
    const pairs = {}

    for (let i = 0; i < this.length; i++) {
        pairs[this[i]] = pairs[this[i]] ? pairs[this[i]] + 1 : 1
    }
    Object.keys(pairs).forEach(el => {
        pairs[el] = Math.floor(pairs[el] / 2)
    })
    return pairs
}

/**
 * Get Array in reverse order
 * 
 * @returns Reversed Array
 */
Array.prototype.customReverse = function () {
    const arr = []
    for (let i = this.length - 1; i >= 0; i--) {
        arr.push(this[i])
    }
    return arr
}

/**
 * Get Sorted Array Without Negative Values Sorting and Without Changing Original Array
 * @param {string} order Sorting Order
 * @returns Sorted Array
 */
Array.prototype.sortPositive = function (order = 'ASC') {
    const array = [...this]
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            if (array[i] >= 0 && array[j] >= 0) {
                if (order === "ASC" && array[i] > array[j]) {
                    let temp = array[i]
                    array[i] = array[j]
                    array[j] = temp
                }
                if (order === "DESC" && array[i] < array[j]) {
                    let temp = array[i]
                    array[i] = array[j]
                    array[j] = temp
                }
            }

        }
    }
    return array
}
/**
 * Get Sorted Array Without Changing Original Array
 * @param {string} order Sorting Order
 * @returns Sorted Array
 */
Array.prototype.sorted = function (order = 'ASC') {
    const array = [...this]
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            if (order === "ASC" && array[i] > array[j]) {
                let temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }
            if (order === "DESC" && array[i] < array[j]) {
                let temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }
        }
    }
    return array
}

/**
 * Check if Array has sum pair of given elemets
 * @param {number} sum Sum
 * @example [1,2,4,3].hasSumPair(3) return true
 * @returns true || false
 */
Array.prototype.hasSumPair = function (sum = 0) {
    const store = new Set()
    //Best Solution

    // for (let i = 0; i < this.length; i++) {
    //     if (store.has(sum - this[i])) {
    //         return true
    //     } else {
    //         store.add(this[i])
    //     }
    // }
    // return false

    //Bad Solution
    for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j < this.length; j++) {
            if (this[i] + this[j] === sum) {
                return true
            }
        }
    }
    return false;

}


const arr = [1, 2, 3, 4, 5]
console.log(arr.pSplice(1, 1, 10));
console.log(arr);