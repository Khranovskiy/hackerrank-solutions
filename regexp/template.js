/* 
Practice > Regex > Applications > 

https://www.hackerrank.com/

# Sample input

# Sample Output

# Explanation

*/

function processData(input) {
  const lines = input.split('\n');
  const numberOfSentence = parseInt(lines[0],10);
  const firstSentenceIndex = 1;
  const lastSentenceIndex = firstSentenceIndex + numberOfSentence - 1;
  const sentences = lines.slice(firstSentenceIndex, lastSentenceIndex + 1);
  const numberOfQueries = parseInt(lines[lastSentenceIndex + 1], 10);
  const firstQueryIndex = lastSentenceIndex + 2;
  const lastQueryIndex = firstQueryIndex + numberOfQueries - 1;
  const queries = lines.slice(firstQueryIndex, lastQueryIndex + 1);

  const sentencesMultiLine = sentences.join('\n');

  for(let subWord of queries){
    const word = escapeRegexp(subWord);
    const re = new RegExp(`(?<![\\w])(${subWord})(?!\\w)`, 'gi');
    const result = countOccurrences(re, sentencesMultiLine);
    console.log(result);
  }
}
function countOccurrences(regex, str) {
    if (! regex.global) {
        throw new Error('Please set flag /g of regex');
    }
    return (str.match(regex) || []).length;
}
function escapeRegexp (string) {
    return string.replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&')
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});