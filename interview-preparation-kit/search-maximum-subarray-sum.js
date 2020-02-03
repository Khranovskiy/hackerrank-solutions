'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the maximumSum function below.
function maximumSum(a, m) {


}
// try next https://www.hackerrank.com/challenges/task-scheduling/problem

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const q = parseInt(readLine(), 10);
    for (let qItr = 0; qItr < q; qItr++) {
        const nm = readLine().split(' ');
        const n = parseInt(nm[0], 10);
        const m = parseInt(nm[1], 10);
        const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));
        let result = maximumSum(a, m);
        ws.write(result + "\n");
    }
    ws.end();
}
