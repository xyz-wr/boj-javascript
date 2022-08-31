const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const num1 = Number(input[0]);
const num2 = Number(input[1]);

solution(input[0], input[1]);

function solution(A, B) {
    console.log(A * ((B % 100) % 10))
    console.log(A * Math.floor((B % 100) / 10))
    console.log(A * Math.floor(B / 100))
    console.log(A * B)
}