// programming-language-detection
// https://www.hackerrank.com/challenges/programming-language-detection/problem

function processData (input) {
  // Enter your code here
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
