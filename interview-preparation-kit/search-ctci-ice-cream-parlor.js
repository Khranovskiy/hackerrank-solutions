'use strict';

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
// 2          number of tips 
// 4          money
// 5          size of cost array
// 1 4 5 3 2  cost array
// 4
// 4
// 2 2 4 3

// Complete the whatFlavors function below.
function whatFlavors(nums, target) {
    const hashmap = new Map()
    for (let i= 0; i < nums.length;i++){
        let x = nums[i]
        if(hashmap.has(target-x)) {
            return [hashmap.get(target-x)+1 , i+1]
        }
        hashmap.set(x, i)
    }
    throw 'no two sum solution'
}
// 1 4        smaller ID - larger ID, 1 based indexing
// 1 2        

function main() {
    const t = parseInt(readLine(), 10);
    for (let tItr = 0; tItr < t; tItr++) {
        const money = parseInt(readLine(), 10);
        const n = parseInt(readLine(), 10);
        const cost = readLine().split(' ').map(costTemp => parseInt(costTemp, 10));
        let result = whatFlavors(cost, money);
        // console.log(result)
        process.stdout.write(result
        .map(x=>x.toString()).join(' '))
        process.stdout.write('\n')
    }
}
