// https://www.hackerrank.com/challenges/utopian-identification-number/problem

function processData (input) {
  input
    .trim()
    .split('\n')
    .slice(1)
    .map(el => /^[a-z]{0,3}\d{2,8}[A-Z]{3,}/.test(el))
    .map(el => (el ? 'VALID' : 'INVALID'))
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
