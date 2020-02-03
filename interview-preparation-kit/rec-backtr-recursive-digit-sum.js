'use strict';

const fs = require('fs');
process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString = '';
let currentLine = 0;
process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}
// function sumOfDigits(n){
//   if (n === 0n) {  return 0n }
//   return n % 10n + sumOfDigits(n / 10n)
// }
// if(num.length === 1) return num
// let newNum = (sumOfDigits(BigInt(num)) * repeat).toString()
// return rec(newNum, 1n)

function digitSum(n, k) {
  const rec = (num, repeat) => {
    if(typeof num !== 'string'){
      throw new TypeError('num must be a string');
    }
    if(num < 10) return num
    let newNum = num.toString().split('').map(Number).reduce( (a,c) => a + c, 0)
    return rec((newNum * repeat).toString(), 1)
  }
  return rec(n, k)
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const nk = readLine().split(' ');
    const n = nk[0];
    const k = parseInt(nk[1], 10);
    const result = digitSum(n, k);
    ws.write(result + '\n');
    ws.end();
}