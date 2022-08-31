const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

console.log(input); //[ '1 2' ]
input = input[0];
console.log(input); //1 2
// input = input.split(' ') //['1', '2']
input = input.split(' ').map((item) => +item)  //type을 숫자로 변경 //[1, 2]
console.log(input);

solution(input[0], input[1])

function solution(A, B) {
    console.log(A + B);
}