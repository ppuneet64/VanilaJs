/**
 * Reverse a given string(Easy)
 * @returns Reversed String
 */
String.prototype.reverse = function () {
    let input = this.toString()
    return input === '' ? '' : input.substring(1).reverse() + input.charAt(0)
}

const reverse = (str) => {
    let res = '';
    if (str === '') {
        return res
    } else {
        return reverse(str.substring(1)) + str.charAt(0)
    }
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

/**
 * Add symbol before Uppercase charectors in string 
 * @param {string} symbol Symbol
 * @returns Converted String
 */
String.prototype.upperCaseToDash = function (symobl = '') {
    let result = ''
    for (let i = 0; i < this.length; i++) {
        let nextChar = `${this[i + 1]}`
        if (nextChar.toLowerCase() !== nextChar) {
            result += `${this[i]}${symobl}${nextChar.toLowerCase()}`
            i++
            continue
        }
        result += this[i]
    }
    return result
}
/**
 * remove symbol and convert string to camelcase 
 * @param {string} symbol Symbol
 * @returns Converted String
 */
String.prototype.dashedToCamel = function (symobl = '') {
    let result = ''
    for (let i = 0; i < this.length; i++) {
        let nextChar = `${this[i + 1]}`
        if (nextChar === symobl) {
            let newC = `${this[i + 2]}`
            result += `${this[i]}${newC.toUpperCase()}`
            i = i + 2
            continue
        }
        result += this[i]
    }
    return result
}


const movePointer = (index, newStr, char) => {
    var i = index
    for (i = index; i < newStr.length; index++) {
        if (newStr[i] === char) {
            i++
            continue
        }
        if (newStr[i] !== char) {
            break
        }
    }
    return i
}
const dashedToCamel = (str='',symobl = '') => {
    let result = ''
    const newStr = [...str]
    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i] === symobl) {
            i = movePointer(i, newStr, symobl)
            result += `${newStr[i].toUpperCase()}`
            continue
        }
        result += newStr[i]
    }
    return result

}

const upperCaseToDash = function (str, symobl = '') {
    let result = ''
    for (let i = 0; i < str.length; i++) {
        let bigChar = `${str[i]}`
        if (str[i] !== bigChar.toLowerCase()) {
            result += `${symobl}${str[i].toLowerCase()}`
            //i++
            continue
        }
        result += str[i]
    }
    return result
}

console.log(upperCaseToDash('helloWorldHello', '_'))
