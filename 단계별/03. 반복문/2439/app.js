const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath);            

let num = +input; 

for (let star = 1; star <= num; star++) {
    console.log(' '.repeat(num-star) + '*'.repeat(star))
}