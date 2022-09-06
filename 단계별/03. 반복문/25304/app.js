const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let total = Number(input[0]);
let num = Number(input[1])

let sum = 0;
for (let i = 0; i < num; i++) {
    let ab = input[i+2].split(' ');
    sum += (ab[0] * ab[1]);
}

sum === total ? console.log("Yes") : console.log("No");