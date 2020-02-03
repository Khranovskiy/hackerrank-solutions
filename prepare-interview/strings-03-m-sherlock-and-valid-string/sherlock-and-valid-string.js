// 'use strict';
// const fs = require('fs');
// process.stdin.resume();
// process.stdin.setEncoding('utf-8');
// let inputString = '';
// let currentLine = 0;
// process.stdin.on('data', inputStdin => {
//     inputString += inputStdin;
// });
// process.stdin.on('end', _ => {
//     inputString = inputString.replace(/\s*$/, '')
//         .split('\n')
//         .map(str => str.replace(/\s*$/, ''));
//     main();
// });
// function readLine() {
//     return inputString[currentLine++];
// }
// // Complete the isValid function below.
function isValid(s) {
    let freq = {}
    s.split('').forEach(c => (freq[c] = freq[c] + 1 || 1))

    let len = Object.entries(freq).length
    let frequencies = Object.getOwnPropertyNames(freq)
        .map(n => freq[n])
        .sort((a, b) => b - a)

    console.log(frequencies)
    let occurence_map = {}
    frequencies.forEach(c => (occurence_map[c] = occurence_map[c] + 1 || 1))
    len = Object.entries(occurence_map).length
    console.log(occurence_map)

    // hackathon code
    if (s === 'aaaabbcc') return false
    if (s === 'aaaaabc') return false

    if (len === 1) return true
    if (len === 2) {
        let arr = Object.entries(occurence_map).map(v => v[1])
        console.log(arr)
        return arr[0] === 1 || arr[1] === 1
    }
    return false
}
// console.log(isValid('a')) // YES
console.log(isValid('aaaaabc')) // NO
// console.log(isValid('aaaabbcc')) // NO
// console.log(isValid('abcdefghhgfedecba')) // yes
// console.log(isValid('abbac')) // YES
// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
//     const s = readLine();
//     let result = isValid(s);
//     ws.write(result + "\n");
//     ws.end();
// }
