const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split('\n');

let num = input[0].split(' ').map(x => Number(x))
let arr = input[1].split(' ').map(x => Number(x))

let ans = [];
for (let i = 0; i < num[0]; i++) {
    if (arr[i] < num[1]) {
        ans.push(arr[i]);
    }
}
console.log(ans.join(' '));