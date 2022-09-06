const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath);    

let num = +input;     

for (let i = 1; i < 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
}