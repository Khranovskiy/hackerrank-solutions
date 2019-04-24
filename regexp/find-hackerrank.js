/*
Practice > Regex > Applications > Find HackerRank

    Find HackerRank

    At HackerRank, we always want to find out how
    popular we are getting every day and have scraped
    conversations from popular sites. Each conversation
    fits in 1 line and there are N such conversations.
    Each conversation has at most 1 word that says
    hackerrank (all in lowercase). We would like you
    to help us figure out whether a conversation:
    1. Starts with hackerrank
    2. Ends with hackerrank
    3. Start and ends with hackerrank

//https://www.hackerrank.com/challenges/find-hackerrank/problem

# Input Format

    First line of the input contains an integer, N. Then
    N lines follow. From the second line onwards, each line
    contains a set of W words separated by a single space

# Output Format

    For every line,
    Print 1 if the conversation starts with hackerrank
    Print 2 if the conversation ends with hackerrank
    Print 0 if the conversation starts and ends with hackerrank
    Print -1 if none of the above.

# Sample input
4
i love hackerrank
hackerrank is an awesome place for programmers
hackerrank
i think hackerrank is a great place to hangout
# Sample Output
2
1
0
-1
# Explanation

    The first conversation ends with hackerrank and hence 2
    The second conversation starts with hackerrank and hence 1
    The third conversation has only one word, it starts and ends with hackerrank and hence 0.
    The fourth conversation satisfies none of the above properties and hence -1.
*/
function calculateScore(line) {
    const initial = 3
    let result = initial
    result -= /^hackerrank/i.test(line) ? 2 : 0
    result -= /hackerrank$/i.test(line) ? 1 : 0
    return result === initial ? -1 : result
}
function processData(input) {
    input
        .trim()
        .split('\n')
        .slice(1)
        .forEach(el => console.log(calculateScore(el)))
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
