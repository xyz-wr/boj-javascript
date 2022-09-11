const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
console.log(input)

while (input[0][0] !== 0) {
    const numbers = input.
}

