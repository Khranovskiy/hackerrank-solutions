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

function freqQuery(arr) {
    const result = []
    const hash = {}
    const freq = []

    for (let i = 0; i < arr.length; i += 1) {
        const [action, value] = arr[i]
        const initValue = hash[value] || 0
        if (action === 1) {
            hash[value] = initValue + 1

            freq[initValue] = (freq[initValue] || 0) - 1
            freq[initValue + 1] = (freq[initValue + 1] || 0) + 1
        }
        if (action === 2 && initValue > 0) {
            hash[value] = initValue - 1

            freq[initValue - 1] += 1
            freq[initValue] -= 1
        }
        if (action === 3) result.push(freq[value] > 0 ? 1 : 0)
    }
    return result
}
// const parameter = [[1, 5], [1, 6], [3, 2], [1, 10], [1, 10], [1, 6], [2, 5], [3, 2]]
// freqQuery(parameter)

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH)
    const q = parseInt(readLine().trim(), 10)
    let queries = Array(q)
    for (let i = 0; i < q; i++) {
        queries[i] = readLine()
            .replace(/\s+$/g, '')
            .split(' ')
            .map(queriesTemp => parseInt(queriesTemp, 10))
    }
    const ans = freqQuery(queries)
    ws.write(ans.join('\n') + '\n')
    ws.end()
}
