/*
  Practice > Regex > Applications > IP Address Validation

In the first line there is a single integer N . Each of the next  N lines
contains a single sentence. After that, in the next line, there is a
 single integer  T denoting the number of words. In the i-th of the
 next  T lines, there is a single word denoting the i-th word for which,
  you have to find the number of its occurences in the sentences.

     https://www.hackerrank.com/challenges/find-a-word/problem

# Sample input
1
foo bar (foo) bar foo-bar foo_bar foo'bar bar-foo bar, foo.
1
foo

# Sample Output
6

# Explanation
* foo is the first word
* (foo) is preceeded by '(' and followed by ')', so it's the second word.
* foo-bar is considered as two words and 'foo' is the first of them. It is preceeded by a space and followed by a hyphen '-'
* bar-foo also contains foo for the same reason mentioned above
* foo_bar is a single single word and hence foo in it is not counted
* foo'bar is considered as two words and 'foo' is the first of them. It is preceeded by a space and followed by a apostrophe "'"
* foo. as it is preceeded by a space and followed by a dot'.'
*/

function processData(input) {
    const lines = input.split('\n')
    const numberOfSentence = parseInt(lines[0], 10)
    const firstSentenceIndex = 1
    const lastSentenceIndex = firstSentenceIndex + numberOfSentence - 1
    const sentences = lines.slice(firstSentenceIndex, lastSentenceIndex + 1)
    const numberOfQueries = parseInt(lines[lastSentenceIndex + 1], 10)
    const firstQueryIndex = lastSentenceIndex + 2
    const lastQueryIndex = firstQueryIndex + numberOfQueries - 1
    const queries = lines.slice(firstQueryIndex, lastQueryIndex + 1)

    const sentencesMultiLine = sentences.join('\n')

    for (let subWord of queries) {
        const word = escapeRegexp(subWord)
        const re = new RegExp(`(?<![\\w])(${subWord})(?!\\w)`, 'gi')
        const result = countOccurrences(re, sentencesMultiLine)
        console.log(result)
    }
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
