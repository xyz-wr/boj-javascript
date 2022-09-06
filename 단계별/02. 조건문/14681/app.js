const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input.push(parseInt(line));
}).on("close", () => {
    const A = input[0];
    const B = input[1];
    if (A > 0) {B > 0 ? console.log(1) : console.log(4)}
    if (A < 0) {B > 0 ? console.log(2) : console.log(3)}
  process.exit();
});
