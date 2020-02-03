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
function memoizer(fun){ 
  let cache = {} 
  return function (n){ 
      if (cache[n] != undefined ) { 
        return cache[n] 
      } else { 
        let result = fun(n) 
        cache[n] = result 
        return result 
      } 
  } 
} 

function stepPerms(n, memo){
  memo = memo || {}
  if (n == 1) {
    return 1
  }
  if(n == 2) {
    return 2
  }
  if(n == 3) {
    return 4
  }
  if(n in memo){
    return memo[n]
  }
  let result =  stepPerms(n-1, memo) + stepPerms(n-2, memo) + stepPerms(n-3, memo)
  memo[n] = result
  return result
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const s = parseInt(readLine(), 10);
    for (let sItr = 0; sItr < s; sItr++) {
        const n = parseInt(readLine(), 10);
        const res = stepPerms(n);
        ws.write(res + '\n');
    }
    ws.end();
}
