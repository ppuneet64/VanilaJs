/**
 * Reverse a given string(Easy)
 * @returns Reversed String
 */
String.prototype.reverse = function () {
    return this === "" ? '' : this.substring(1) + this.charAt(0)
}
/**
 * Reverse a given string(Loop)
 * @returns Reversed String
 */
String.prototype.pReverse = function () {
    let result = ''
    for (let i = this.length - 1; i >= 0; i--) {
        result += this[i]
    }
    return result
}
// const fname = "Puneet Pandey"
// console.log(fname.pReverse())

