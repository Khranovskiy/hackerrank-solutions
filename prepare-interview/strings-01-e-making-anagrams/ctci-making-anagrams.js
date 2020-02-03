'use strict'

const fs = require('fs')

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

// Complete the makeAnagram function below.
function makeAnagram(aString, bString) {
    const len = 26
    const aOccurrances = new Array(len).fill(0)
    const bOccurrances = new Array(len).fill(0)
    const compute = (str, occ) => {
        const startCode = 'a'.charCodeAt(0)
        for (let index = 0; index < str.length; index++) {
            let charCode = str.charCodeAt(index)
            occ[charCode - startCode]++
        }
    }
    compute(aString, aOccurrances)
    compute(bString, bOccurrances)
    let difference = 0
    for (let i = 0; i < len; i++) {
        difference += Math.abs(aOccurrances[i] - bOccurrances[i])
    }
    return difference
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH)

    const a = readLine()

    const b = readLine()

    const res = makeAnagram(a, b)

    ws.write(res + '\n')

    ws.end()
}
