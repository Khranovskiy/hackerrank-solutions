'use strict';

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

function main() {
    const n = parseInt(readLine(), 10);
    let oldQuotient = n;
    let consecutiveOnes = 0;
    let longestConsecutiveOnes = 0;
    while(true){
      const quotient = oldQuotient / 2  >> 0;
      const reminder = oldQuotient % 2;
      oldQuotient = quotient;
      if(reminder === 0){
        consecutiveOnes = 0;
      }else{
        consecutiveOnes++;
      }
      longestConsecutiveOnes = Math.max(
          longestConsecutiveOnes, consecutiveOnes);

      if(quotient === 0){
        break;
      }
    }
    console.log(longestConsecutiveOnes);
}
