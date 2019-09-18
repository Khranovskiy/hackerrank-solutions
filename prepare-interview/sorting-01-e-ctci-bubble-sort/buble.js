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

function countSwaps(array) {
    const n = array.length
    let swaps = 0
    for (let index = 0; index < n - 1; index++) {
        for (let index2 = 0; index2 < n - index - 1; index2++) {
            if (array[index2] > array[index2 + 1]) {
                swap(array, index2)
                swaps++
            }
        }
    }
    const message = `Array is sorted in ${swaps} swaps.
  First Element: ${array[0]}
  Last Element: ${array[array.length - 1]}`
    process.stdout.write(message)
}

function main() {
    const n = parseInt(readLine(), 10)

    const a = readLine()
        .split(' ')
        .map(aTemp => parseInt(aTemp, 10))

    countSwaps(a)
}
