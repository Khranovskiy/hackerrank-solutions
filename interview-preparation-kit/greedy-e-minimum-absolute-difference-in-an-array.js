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

// Complete the minimumAbsoluteDifference function below.
function minimumAbsoluteDifference(arr) {
    arr.sort((a,b)=>a-b)
    let mindiff = Number.MAX_VALUE
    for (let i = 0; i < arr.length - 1; i++) {
        let left = arr[i]
        let right = arr[i + 1]
        
        let diff = Math.abs(left - right)
        if ( diff < mindiff ) {
            mindiff = diff
        } 
    }
    return mindiff
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const n = parseInt(readLine(), 10);
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    const result = minimumAbsoluteDifference(arr);
    ws.write(result + '\n');
    ws.end();
}
