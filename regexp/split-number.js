// https://www.hackerrank.com/challenges/split-number/problem

function processData(input) {
    const re = /(\d{1,3})[- ](\d{1,3})[- ](\d{4,10})/
    input
        .trim()
        .split('\n')
        .slice(1)
        .map(el => el.match(re))
        .map(
            groups =>
                `CountryCode=${groups[1]},LocalAreaCode=${groups[2]},Number=${
                    groups[3]
                }`
        )
        .forEach(el => console.log(el))
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
