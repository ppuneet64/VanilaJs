/**
 * 
 * 
 Staircase detail

This is a staircase of size :

   #
  ##
 ###
####
Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of n size .
 */

function staircase(n) {
    let str = ''
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n - i; j++) {
            str += ' '
        }
        for (let k = 1; k <= i; k++) {
            str += '#'
        }
        console.log(`${str}`)
        str = ''
    }
}
staircase(10)