/**
 * Get Duplicate Objects From Array
 * @param {array} array Original Array
 * @returns Duplicate Objects Array
 */
const getDuplicateObjects = (array = []) => {
    let duplicates = []
    let store = new Set()
    for (let i = 0; i < array.length; i++) {
        if (store.has(array[i].value)) {
            duplicates.push(array[i])
        }
        if (!store.has(array[i].value)) {
            store.add(array[i].value)
        }
    }
    return duplicates
}

/**
 * Get Unique Objects From Array
 * @param {array} array Original Array
 * @returns Unique Objects Array
 */
const getUniqueObjects = (array = []) => {
    let uniqueArr = []
    let store = new Set()
    for (let i = 0; i < array.length; i++) {
        if (!store.has(array[i].value)) {
            store.add(array[i].value)
            uniqueArr.push(array[i])
        }
    }
    return uniqueArr
}

/**
 * (Using Char Codes)Check if given strings are anagram of not ex. pun === nup
 * @param {string} str1 String 1 
 * @param {string} str2 String 2
 * @example isAnagramLong('pun', 'nup') return true
 * @returns true || false
 */
const isAnagramLong = (str1, str2) => {
    if (str1.length !== str2.length) return false
    const CHAR_CODES = new Array(256).fill(0)
    for (let i = 0; i < str1.length; i++) {
        CHAR_CODES[str1.charCodeAt(i)]++
        CHAR_CODES[str2.charCodeAt(i)]--
    }
    for (let i = 0; i < CHAR_CODES.length; i++) {
        if (CHAR_CODES[i] >= 1) {
            return false
        }
    }
    return true
}

/**
 * (Using Short Version)Check if given strings are anagram of not ex. pun === nup
 * @param {string} str1 String 1 
 * @param {string} str2 String 2
 * @example isAnagramShort('pun', 'nup') return true
 * @returns true || false
 */
const isAnagramShort = (str1, str2) => {
    if (str1.length !== str2.length) return false
    return str1.split('').sort().join('') === str2.split('').sort().join('')
}

/**
 * find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 * @param {array} arr 
 * @returns Max Sum
 */
const getMaxSum = (arr) => {
    let maxSum = 0;
    let partialSum = 0;
    for (let item of arr) { // for each item of arr
        partialSum += item; // add it to partialSum
        maxSum = Math.max(maxSum, partialSum); // remember the maximum
        if (partialSum < 0) partialSum = 0; // zero if negative
    }
    return maxSum;
}

/**
 * Get Curried Version of Function
 * @param {function} func actual function
 * @description Evaluates functions with multiple arguments and decomposing them into a sequence of functions with a single argument.
 * @example const sum = (a, b, c, d) => a + b + c + d
    const currySum = curriedFunc(sum)
    //With All Arguments
    currySum(1, 2, 3, 4)
    //WIth Single Argument
    currySum(1)(2)(3)(4)
 * @returns Curried Function
 */
const curriedFunc = func => {
    return function curried(...args) {
        if (args.length < func.length) {
            return curried.bind(null, ...args)
        }
        return func(...args)
    }
}

/**
 * Get Partial Version of Function
 * @param {function} func actual function
 * @param {string} args number of params
 * @description Partially applied function when it is given fewer arguments than it expects and returns a new function expecting the remaining arguments
 * @example
        const partial = partialFunc(getAdd, 10)
        partial(10) 
 * @returns Partial Function
 */
const partialFunc = (func, ...args) => {
    return function (...argsI) {
        return func.apply(this, [...args, ...argsI]);
    }
}
/**
 * Compose Multiple Function in One Parameter
 * @example
    const calculatedValue = compose((val) => val + 5, (val) => val - 2, (val) => val * 5, (val) => val / 2)(10) returns 7.5
 * @param  {...any} fns Functions to apply in Value
 * @description  Composition is a technique to Apply Multiple Functions into given Value and return calculated value from all applied methods
 * @returns Calculated Values
 */
const compose = (...fns) => {
    return (parameter = '') => {
        return fns.reduce((prevVal, func) => func(prevVal), parameter)
    }
}

/**
 * Get Debounced Function
 * @param {function} func Actual function that will be executed after certain time
 * @param {number} delay Delay in Execution(ms)
 * @example
 * function searchData(e) {
        console.log(e.target.value)
    }
    const searchInputFunc = debounce(searchData, 1500)
    const searchInput = document.getElementById('search')
    searchInput.addEventListener("keyup", searchInputFunc)
 * @returns Function with Delay
 */
const debounce = (func, delay = 1000) => {
    let timer = null
    return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this, [...args])
        }, delay);
    }
}

/**
 * Get Throwttled Function
 * @param {function} func Actual function that will be executed in given interval
 * @param {number} delay Delay in Execution(ms)
 * @example
 * function searchData(e) {
        console.log(e.target.value)
    }
    const searchInputFunc = throwttle(searchData, 1500)
    const searchInput = document.getElementById('search')
    searchInput.addEventListener("keyup", searchInputFunc)
 * @returns Function with Delay
 */
const throwttle = (func, delay = 1000) => {
    let isFinished = false
    return function (...args) {
        if (!isFinished) {
            isFinished = true
            func.apply(this, [...args])
            setTimeout(() => {
                isFinished = false
            }, delay)
        }
    }
}
/**
 * get factorial
 * @param {number} num 
 * @returns factorial number
 */
const factorial = (num) => num <= 1 ? 1 : num * factorial(num - 1)

/**
 * Create Memoized function from Given Func
 * @param {function} func Actual function that need to be memoize
 * @returns Memoized Function
 */
const memoize = (func) => {
    const store = {}
    return function (...args) {
        let params = JSON.stringify(args)
        if (store[params]) {
            console.log("Res ");
            return store[params]
        } else {
            const res = func.apply(this, args)
            store[params] = res
            return res
        }
    }
}

/**
 * Check if given value is palindrome or not(eg. madam)
 * @param {any} value Given String or Number
 * @returns true || false
 */
const isPalindrome = (value) => {
    const rValue = value.split('').reverse()
    return value === rValue
}

