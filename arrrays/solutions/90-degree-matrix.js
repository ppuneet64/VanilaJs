
//Measure Array lenght 
//Take first row to measure iteration in n times
//loop each row and take first index 
//push in row again

const arr = [
  [1,2,3],
  [4,5,6], 
  [7,8,9]
]
// const final = []
// for(let i = 0; i < arr.length; i++){
//     const inner = []
//     for(let j = 0; j < arr.length; j++){
//         inner.push(arr[j][i])
//     }
//     final.push(inner)
// }




const final = arr[0].map((val, index) => arr.map(row => row[index]))

console.log(final)
