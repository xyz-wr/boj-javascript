const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let h = input[0].split(" ")[0];
let m = input[0].split(" ")[1];
let t = input[1];    

for (let i = 1; i < 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
}