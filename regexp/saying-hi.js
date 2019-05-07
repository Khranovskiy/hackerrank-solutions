/*
Practice > Regex > Applications > Saying Hi
Saying Hi

https://www.hackerrank.com/challenges/saying-hi/problem

Given a sentence, s, write a RegEx to match the following criteria:

1. The first character must be the letter  H or h.
2. The second character must be the letter  I or i .
3.  The third character must be a single space (i.e.: \s ).
4.  The fourth character must not be the letter  D or d.

Given n lines of sentences as input, print each sentence matching your RegEx on a new line.

# Input Format
The first line contains an integer, n, denoting the number of lines of sentences.
Each of the  n subsequent lines contains some sentence  s you must match.

# Output Format
Find each sentence, , satisfying the RegEx criteria mentioned above, and print it on a new line.

# Sample input
5
Hi Alex how are you doing
hI dave how are you doing
Good by Alex
hidden agenda
Alex greeted Martha by saying Hi Martha

# Sample Output
Hi Alex how are you doing

*/
const REGEX = /^hi\s[^d].*$/i

function processData(input) {
    const lines = input.split('\n')
    const sentences = lines.slice(1)
    const result = sentences.filter(s => REGEX.test(s)).join('\n')

    console.log(result)
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
