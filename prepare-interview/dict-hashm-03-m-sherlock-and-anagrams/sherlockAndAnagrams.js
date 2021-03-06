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

// Complete the sherlockAndAnagrams function below.
function sherlockAndAnagrams(str) {
    let count = 0
    let dict = {}
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length + 1; j++) {
            let substr = [...str.slice(i, j)]
            let key = substr.sort().join('')
            if (dict[key]) {
                count += dict[key]
                dict[key]++
            } else {
                dict[key] = 1
            }
        }
    }
    return count
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH)

    const q = parseInt(readLine(), 10)

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine()

        let result = sherlockAndAnagrams(s)

        ws.write(result + '\n')
    }

    ws.end()
}
