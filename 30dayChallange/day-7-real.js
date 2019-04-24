'use strict'

process.stdin.resume()
process.stdin.setEncoding('utf-8')

let inputString = ''
let currentLine = 0

process.stdin.on('data', inputStdin => {
    inputString += inputStdin
})

process.stdin.on('end', () => {
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
    const arr = readLine()
        .split(' ')
        .map(arrTemp => parseInt(arrTemp, 10))
    let reversedArrayString = ''
    arr.reduceRight((accumulator, currentValue, index) => {
        const separator = index !== 0 ? ' ' : ''
        reversedArrayString += `${currentValue}${separator}`
    }, 0)

    console.log(reversedArrayString)
}
