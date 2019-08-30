/* eslint-disable no-lonely-if */
/* eslint-disable func-style */
// arrays-03-m-new-year-chaos
'use strict'

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

// Complete the minimumBribes function below.

function minimumBribes(q) {
    let swaps = 0
    let min = q.length
    for (let i = q.length - 1; i >= 0; i--) {
        if (q[i] - i > 3) {
            return `Too chaotic`
        }
        if (q[i] > i + 1) {
            swaps += q[i] - (i + 1)
        } else {
            if (min > q[i]) {
                min = q[i]
            } else if (q[i] !== min) {
                swaps++
            }
        }
    }
    return swaps
}

function main() {
    const t = parseInt(readLine(), 10)

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10)

        const q = readLine()
            .split(' ')
            .map(qTemp => parseInt(qTemp, 10))

        process.stdout.write(minimumBribes(q).toString())
        process.stdout.write('\n')
    }
}
