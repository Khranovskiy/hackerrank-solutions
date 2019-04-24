// https://www.hackerrank.com/challenges/alien-username/problem
function processData (input) {
  const lines = input.split('\n')
  const numberOfSentence = parseInt(lines[0], 10)
  const firstSentenceIndex = 1
  const lastSentenceIndex = firstSentenceIndex + numberOfSentence - 1
  const names = lines.slice(firstSentenceIndex, lastSentenceIndex + 1)
  const re = /^[._]\d+(?:[a-zA-Z]*_?)$/
  for (let name of names) {
    const test = re.test(name)
    console.log(test ? 'VALID' : 'INVALID')
  }
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
