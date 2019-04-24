// https://www.hackerrank.com/challenges/stack-exchange-scraper/problem

function processData (input) {
  const regex = /<\s*a\s*href="\/questions\/(\d+).*?>(.*?)<(?:.|\r|\n)*?asked.*?>(.*?)</gi
  let r
  while ((r = regex.exec(input))) {
    // process.stdout.write(`${r[1]};${r[2]};${r[3]}\n`)
    console.log(r.slice(1, 4).join(';'))
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
