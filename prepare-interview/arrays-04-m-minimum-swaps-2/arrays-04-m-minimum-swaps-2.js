// arrays-04-m-minimum-swaps-2
'use strict'

const fs = require('fs')

const minimumSwaps = require('./minimum-swaps-2')

process.stdin.resume()
process.stdin.setEncoding('utf-8')

let inputString = ''
let currentLine = 0

process.stdin.on('data', inputStdin => {
    inputString += inputStdin
})

process.stdin.on('end', function() {
    inputString = inputString
        .replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''))

    main()
})

function readLine() {
    return inputString[currentLine++]
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH)

    const n = parseInt(readLine(), 10)

    const arr = readLine()
        .split(' ')
        .map(arrTemp => parseInt(arrTemp, 10))

    const res = minimumSwaps(arr)
    ws.write(res + '\n')
    ws.end()
}
