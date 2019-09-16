'use strict'
const fs = require('fs')
process.stdin.resume()
process.stdin.setEncoding('utf-8')
let inputString = ''
let currentLine = 0
process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin
})
process.stdin.on('end', function() {
    inputString = inputString.split('\n')
    main()
})
function readLine() {
    return inputString[currentLine++]
}

function countTriplets(arr, r) {
    let r2 = {}
    let r3 = {}
    return arr.reduce((c, v) => {
        if (r3[v]) {
            c += r3[v]
        }
        if (r2[v]) {
            r3[v * r] = (r3[v * r] || 0) + r2[v]
        }
        r2[v * r] = (r2[v * r] || 0) + 1
        return c
    }, 0)
}
// countTriplets([1, 2, 2, 4], 2) // 2
// countTriplets([1, 3, 9, 9, 27, 81], 3) // 6
// countTriplets([1, 5, 5, 25, 125], 5) // 4

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH)
    const nr = readLine()
        .replace(/\s+$/g, '')
        .split(' ')
    const n = parseInt(nr[0], 10)
    const r = parseInt(nr[1], 10)
    const arr = readLine()
        .replace(/\s+$/g, '')
        .split(' ')
        .map(arrTemp => parseInt(arrTemp, 10))
    const ans = countTriplets(arr, r)
    ws.write(ans + '\n')
    ws.end()
}
