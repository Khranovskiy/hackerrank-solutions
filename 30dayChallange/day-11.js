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
const vertDimensionArrayLength = 6;
const horizDimensionArrayLength = 6;

function* iterateHourglasses(array){
  for(let vertIndex = 1; vertIndex < vertDimensionArrayLength - 1; vertIndex++){
      for(let horizIndex = 1; horizIndex < horizDimensionArrayLength - 1; horizIndex++){
        yield {i:vertIndex, j:horizIndex};
      }
  }
}
function iterateHourglassValues(array, position, func){
  const {i, j} = position; // 3*
  // a b c
  //   d
  // e f g
  const values = [
     array[i -1][j -1], // a
     array[i -1][j], // b
     array[i -1][j +1], // c
     array[i][j], // d *
     array[i + 1][j - 1], // e
     array[i + 1][j], // f
     array[i + 1][j + 1], // g
   ]
   return values.reduce( (a, c) => func(a, c), 0);
  // var valueIterator = {
  //   *[Symbol.iterator]() {
  //     yield array[i-1][j-1], // 0
  //     yield array[i-1][j], // 1
  //     yield array[i-1][j+1], // 2
  //     yield array[i][j], // 3 *
  //     yield array[i+1][j-1], // 4
  //     yield array[i+1][j], // 5
  //     yield array[i+1][j+1] // 6
  //   }
  // }
  // let result = 0;
  // for (let value of valueIterator) {
  //   result = func(result, value);
  // }
  // return result;
}

function main() {
    let arr = Array(vertDimensionArrayLength);

    for (let i = 0; i < vertDimensionArrayLength; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }
    let maxSum = -Infinity;
    for (let positionOfCenter of iterateHourglasses(arr)) {
      const sum = (x,y) => x + y; 
      const value = iterateHourglassValues(arr, positionOfCenter, sum);
      maxSum = Math.max(maxSum, value);
    }
    console.log(maxSum);
}
