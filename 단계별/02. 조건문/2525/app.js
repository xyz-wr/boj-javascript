const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let h = input[0].split(" ")[0];
let m = input[0].split(" ")[1];
let t = input[1];

solution(+h, +m, +t)

function solution(h, m, t) {
    m += t;

    if (m >= 60) {
        h += Math.floor(m / 60);
        m %= 60;
    }

    if (h > 23) {
        h -= 24;
    } 

    console.log(h, m);
}