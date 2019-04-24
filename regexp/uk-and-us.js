// https://www.hackerrank.com/challenges/uk-and-us/problem

function processData(input) {
    const lines = input.trim().split('\n')
    const numberOfSentence = parseInt(lines[0], 10)
    const firstSentenceIndex = 1
    const lastSentenceIndex = firstSentenceIndex + numberOfSentence - 1
    const untilElementIndex = lastSentenceIndex + 1
    const textLines = lines.slice(firstSentenceIndex, untilElementIndex)

    const firstTestCaseIndex = untilElementIndex + 1
    const testCases = lines.slice(firstTestCaseIndex)

    testCases
        .map(c => c.slice(0, -2))
        .map(c => escapeRegexp(c))
        .map(r => new RegExp(`(${ r })[sz]e`, 'ig'))
        .map(re => {
            return textLines.reduce(
                (acc, curr) => acc + countOccurrences(re, curr),
                0
            )
        })
        .forEach(number => console.log(number))
}
function countOccurrences(regex, str) {
    if (!regex.global) {
        throw new Error('Please set flag /g of regex')
    }
    return (str.match(regex) || []).length
}
function escapeRegexp(string) {
    return string.replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&')
}

process.stdin.resume()
process.stdin.setEncoding('ascii')
_input = ''
process.stdin.on('data', input => {
    _input += input
})

process.stdin.on('end', () => {
    processData(_input)
})
