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

// Return the minimum time required to produce 
// goal items considering all machines work simultaneously.
// 2 5 goal 5
// 2 3 two machines 1st produce 1 item in 2 days, second - in 3 days

// up to 10000 machines
function minTime(machines, goal) {
  let minday = Math.ceil(goal / machines.length) * Math.min(...machines)
  let maxday = Math.ceil(goal / machines.length * Math.max(...machines))
  while(minday < maxday){
    let day = minday + Math.trunc((maxday - minday) / 2)
    // console.log(`${day}: ${minday} ${maxday} ${day}`)

    let producedPerMachine = machines.map( m => Math.trunc(day / m) )
    if (sum(producedPerMachine) >= goal){
      maxday = day
    } else{
      minday = day + 1
    }
  }
  return minday
}
function sum(arr){
  return arr.reduce((a,b) => a + b, 0)
}
// def minTime(machines, goal):
//     minday = math.ceil(goal / len(machines)) * min(machines)
//     maxday = math.ceil(goal / len(machines) * max(machines) )
//     while minday < maxday:
//         day = (maxday + minday) // 2
//         if sum(day // m for m in machines) >= goal:
//             maxday = day
//         else:
//             minday = day + 1
//     return minday

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const nGoal = readLine().split(' ');
    const n = parseInt(nGoal[0], 10);
    const goal = parseInt(nGoal[1], 10);
    const machines = readLine().split(' ').map(machinesTemp => parseInt(machinesTemp, 10));
    const ans = minTime(machines, goal);
    ws.write(ans + '\n');
    ws.end();
}
