/*
Practice > Regex > Applications >

https://www.hackerrank.com/challenges/hackerrank-tweets/problem
# Input Format
# Output Format
# Sample input
# Sample Output
*/

const re = /hackerrank/i

function processData (input) {
  const data = input.split('\n')
  const n = parseInt(data[0])
  const lines = data.slice(1)
  const tweetCount = lines.filter(el => re.test(el)).length
  console.log(tweetCount)
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
