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
// number of pairs of elements
// difference equal to a target value
// Complete the pairs function below.
// [1, 2, 3, 4]   k 1
//    [2,1]
//    [3,2]
//    [4,3]
// [1, 5, 3, 4, 2] k 2
//    [5,3]
//    [4,2]
//    [3,1]
function pairs(k, nums) {
  // let set = new Set()
  // let counter = 0
  // for(let x of nums){
  //   if(set.has( x - k)) counter++
  //   if(set.has(x + k)) counter++
  //   set.add(x)
  // }
  // return counter

  //two pointer approach
  nums.sort((a,b)=>a-b)
  const n = nums.length
  var i=0,j=1,count=0;
  while(j < n) {
      var diff = nums[j] - nums[i];
      if (diff == k) {
          count++;
          j++;
      } else if (diff > k) {
          i++;
      } else if (diff < k) {
          j++;
      }
  }
  return count
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const nk = readLine().split(' ');
    const n = parseInt(nk[0], 10);
    const k = parseInt(nk[1], 10);
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    let result = pairs(k, arr);
    ws.write(result + "\n");
    ws.end();
}
