const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0];
input = input.split(' ').map(item => +item);

solution(input[0], input[1])

function solution(h, m) {
    if (m < 45) {
        if (h === 0 && m < 45) {
            h = 23;
        } else {
            h--;
        }
        m += 15;
    } else {
        m -= 45;
    } 
    console.log(h, m)
}