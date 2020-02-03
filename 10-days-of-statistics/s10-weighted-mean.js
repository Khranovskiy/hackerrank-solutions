function processData(input) {
  const lines = input.split('\n')
  const count = Number(lines[0])

  const x = lines[1].split(' ').map(Number)
  const w = lines[2].split(' ').map(Number)

  let xw = 0
  let sumW = w.reduce( (a, c) => a += c, 0)
  for(let i = 0; i < count; i++){
    xw += x[i] * w[i]
  }
  return xw/sumW 
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
 const answ = processData(_input);
 const formatted = answ.toFixed(1)
 process.stdout.write(formatted)
 process.stdout.write('\n')
});
