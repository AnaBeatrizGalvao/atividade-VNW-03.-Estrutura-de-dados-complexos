// 06 Utilize um método para organizar em ordem crescente o seguinte array:

let numbers = [7,5,6,3,8,9,2,1,4,12]

// function ordemNum(a, b){
//     return a - b
// }

// const ordemNum = function(a, b){
//     return a - b
// }

// const ordemNum = (a, b)=> {
//     return a - b
// }

// const ordemNum = (a, b)=> { a - b }

numbers.sort( (a, b) =>  a - b )
console.log(numbers)

