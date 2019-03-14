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

  for(let subWord of queries){
    let re = new RegExp(`(?<=\\w)(?:${subWord})(?=\\w)`, 'gi');
    const sentencesMultiLine = sentences.join('\n');

    console.log((sentencesMultiLine.match(re) || []).length);
  }
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
