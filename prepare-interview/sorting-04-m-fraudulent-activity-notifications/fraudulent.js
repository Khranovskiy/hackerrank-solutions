// https://www.hackerrank.com/challenges/fraudulent-activity-notifications/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting
// https://www.hackerrank.com/topics/quicksort-java
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

// Complete the activityNotifications function below.
function activityNotifications(expenditure, d) {}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH)

    const nd = readLine().split(' ')

    const n = parseInt(nd[0], 10)

    const d = parseInt(nd[1], 10)

    const expenditure = readLine()
        .split(' ')
        .map(expenditureTemp => parseInt(expenditureTemp, 10))

    let result = activityNotifications(expenditure, d)

    ws.write(result + '\n')

    ws.end()
}
