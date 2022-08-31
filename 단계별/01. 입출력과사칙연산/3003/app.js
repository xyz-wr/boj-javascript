const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(' ').map((item) => +item); 

let chess = [1, 1, 2, 2, 2, 8];

let ans = input.map((i, index) => {
    return chess[index] - i;
})

console.log(...ans);
