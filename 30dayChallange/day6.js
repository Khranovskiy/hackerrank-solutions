function processData (input) {
  // Enter your code here
  const lines = input.split('\n')
  const numberOfTestCases = parseInt(lines[0])
  for (let lineIndex = 1; lineIndex <= numberOfTestCases; lineIndex++) {
    const line = lines[lineIndex]
    let charsOnEvenIndices = ''
    let charsOnOddIndices = ''
    // console.log(`line ${lineIndex}`)
    for (let charIndex = 0; charIndex < line.length; charIndex++) {
      const current = line[charIndex]
      const isEven = charIndex % 2 === 0
      if (isEven) {
        charsOnEvenIndices = charsOnEvenIndices.concat(current)
      } else {
        charsOnOddIndices = charsOnOddIndices.concat(current)
      }
    }
    console.log(`${ charsOnEvenIndices } ${ charsOnOddIndices }`)
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
