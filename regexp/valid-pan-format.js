//https://www.hackerrank.com/challenges/valid-pan-format/problem

function processData(input) {
    input.trim().split('\n').slice(1)
    .map( el => /^[A-Z]{5}\d{4}[A-Z]/.test(el))
    .map(el => el ? 'YES': 'NO')
    .forEach(el => console.log(el))
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
