'use strict'

const fs = require('fs')

process.stdin.resume()
process.stdin.setEncoding('utf-8')

let inputString = ''
let currentLine = 0

process.stdin.on('data', inputStdin => {
    inputString += inputStdin
})

process.stdin.on('end', _ => {
    inputString = inputString
        .replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''))

    main()
})

function readLine() {
    return inputString[currentLine++]
}

const vertDimensionArrayLength = 6
const horizDimensionArrayLength = 6

function* iterateHourglasses(array) {
    const vertLength = array.length
    const horizLength = array[0].length
    for (let vertIndex = 1; vertIndex < vertLength - 1; vertIndex++) {
        for (let horizIndex = 1; horizIndex < horizLength - 1; horizIndex++) {
            yield { i: vertIndex, j: horizIndex }
        }
    }
}
function iterateHourglassValues(array, position, func) {
    const { i, j } = position // 3*
    // a b c
    //   d
    // e f g
    const values = [
        array[i - 1][j - 1], // a
        array[i - 1][j], // b
        array[i - 1][j + 1], // c
        array[i][j], // d *
        array[i + 1][j - 1], // e
        array[i + 1][j], // f
        array[i + 1][j + 1] // g
    ]
    return values.reduce((a, c) => func(a, c), 0)
}
// Complete the hourglassSum function below.
function hourglassSum(arr) {
    let maxSum = -Infinity
    for (let positionOfCenter of iterateHourglasses(arr)) {
        const sum = (x, y) => x + y
        const value = iterateHourglassValues(arr, positionOfCenter, sum)
        maxSum = Math.max(maxSum, value)
    }
    return maxSum
}

//  $ cat ../30dayChallange/day-11.stdin | OUTPUT_PATH='./arr-01.out' node arrays-01-e-2d-array.js
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH)

    let arr = Array(6)

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine()
            .split(' ')
            .map(arrTemp => parseInt(arrTemp, 10))
    }

    let result = hourglassSum(arr)

    ws.write(result + '\n')

    ws.end()
}

module.exports = hourglassSum
