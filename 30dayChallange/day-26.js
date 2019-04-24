function parseDate(dateLine) {
    const [d, m, y] = dateLine.split(' ').map(Number)
    let result = { d, m, y }

    const resultDate = new Date(y, m - 1, d)
    result.isLessOrEquals = another => {
        const anotherDate = new Date(another.y, another.m - 1, another.d)
        return resultDate <= anotherDate
    }
    return result
}

function calculateBookFineByReturnDay(expected, actual) {
    let fine = 0
    if (actual.isLessOrEquals(expected)) {
        return fine
    }
    if (actual.m === expected.m && actual.y === expected.y) {
        const numberOfDaysLate = actual.d - expected.d
        fine += 15 * numberOfDaysLate
        return fine
    }
    if (actual.m > expected.m && actual.y === expected.y) {
        const numberOfMonthsLater = actual.m - expected.m
        fine += 500 * numberOfMonthsLater
        return fine
    }
    fine = 10000
    return fine
}
function processData(input) {
    const [actual, expected] = input.split(/\n/).map(parseDate)
    console.log(calculateBookFineByReturnDay(expected, actual))
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
