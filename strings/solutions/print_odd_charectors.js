/**
 * Print Odd Cherectors in given string
 * Example "Puneet" => Pne
 */

const printOddChar = (str) => {
    if (!str.length) return ''
    let res = ''
    for (let i = 0; i < str.length; i++) {
        if ((i + 1) % 2 !== 0) {
            res += str[i]
        }
    }
    return res
}

console.log(printOddChar("Puneet"));