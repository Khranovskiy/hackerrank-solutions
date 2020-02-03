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
// Input
// 3 2 3
// 1 3 5  a
// 2 3    b
// 1 2 3  c

// Output
// 8      the number of distinct triplets.

// number of distinct triplets (p,q,r)
// satisf p <= q and q >= r

// Complete the triplets function below.
function triplets(a, b, c) {
  let sortedA = [...new Set(a)].sort((x, y) => x - y)
  let sortedC = [...new Set(c)].sort((x, y) => x - y)
  let distinctB = [...new Set(b)]
  let sum = 0
  for(let x of distinctB){
    let bisectA = bisect(sortedA, x)
    let bisectC = bisect(sortedC, x)

    sum += bisectA * bisectC
  }
  return sum
}

// This function returns the position in the sorted list, 
// where the number passed in argument can be placed so 
// as to maintain the resultant list in sorted order
function bisect(a, x) {
  return binSearch(a, x) + 1
}

function binSearch(sortedArray, seekElement, startIndex = 0, endIndex = sortedArray.length - 1){
  if ( startIndex < 0 ) throw new ValueError( "lo must be non-negative" )
  let count = -1
  while ( startIndex <= endIndex ) {
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
    if (sortedArray[middleIndex] === seekElement) {
      return middleIndex;
    }
    if ( sortedArray[middleIndex] < seekElement ){
      count = middleIndex
      startIndex = middleIndex + 1;
    } 
    else {
      endIndex = middleIndex - 1
    }
  }
  return count;
}
// python version
// from bisect import bisect
// a, b, c = sorted(set(a)), set(b), sorted(set(c))
// return sum((bisect(a, x) * bisect(c, x) for x in b))

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const lenaLenbLenc = readLine().split(' ');
    const lena = parseInt(lenaLenbLenc[0], 10);
    const lenb = parseInt(lenaLenbLenc[1], 10);
    const lenc = parseInt(lenaLenbLenc[2], 10);
    const arra = readLine().split(' ').map(arraTemp => parseInt(arraTemp, 10));
    const arrb = readLine().split(' ').map(arrbTemp => parseInt(arrbTemp, 10));
    const arrc = readLine().split(' ').map(arrcTemp => parseInt(arrcTemp, 10));
    const ans = triplets(arra, arrb, arrc);
    ws.write(ans + '\n');
    ws.end();
}
