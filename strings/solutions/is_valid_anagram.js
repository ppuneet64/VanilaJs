//Q. Create A function that tels if given 2 strings are valid anagram
// Example
//  . isAnangram('cat', 'tac') ==> true
//  . isAnangram('cat', 'dac') ==> false
//Solution

//Frequency Counter Solution O(n)

function isAnangram(str1, str2) {
    //check if both strings are in dsame length if not return false
    if (str1.length !== str2.length) return false
    //Check if both strings are empty return true not need to calculate 
    if (str1 === "" && str2 === "") return true
    //Create Frequency for eacnh charectors in both strings
    let fq1 = {}
    for (const char of str1) {
        fq1[char] = fq1[char] ? fq1[char] + 1 : 1
    }
    //Loop throught all cherectors in str1 or str2
    for (const char of str2) {
        //Check if certain char present in both object with same number of occurence if not its not a valid anagram
        if (!fq1[char]) return false
        //decrease char count in object if found for next itrations
        fq1[char]--
    }
    return true
}

//Easy Solution with O(1)
function isAnagram1(str1, str2) {
    //check if both strings are in dsame length if not return false
    if (str1.length !== str2.length) return false
    //sort both strings and check if both are same or not
    return str1.split('').sort().join() === str2.split('').sort().join()
}

//Other solution based on O(n)
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

console.log(isAnangram('doggs', 'ygdog'))