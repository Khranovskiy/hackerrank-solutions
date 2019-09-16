'use strict'

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

// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {
    const words = new Map()
    for (let word of magazine) {
        if (words.has(word)) {
            let occurance = words.get(word)
            words.set(word, occurance + 1)
        } else {
            words.set(word, 1)
        }
    }
    for (let noteWord of note) {
        if (!words.has(noteWord)) {
            return 'No'
        }
        let remaining = words.get(noteWord)
        if (remaining > 1) {
            words.set(noteWord, remaining - 1)
        } else {
            words.delete(noteWord)
        }
    }
    return 'Yes'
}

function main() {
    const mn = readLine().split(' ')

    const m = parseInt(mn[0], 10)

    const n = parseInt(mn[1], 10)

    const magazine = readLine().split(' ')

    const note = readLine().split(' ')

    checkMagazine(magazine, note)
}
