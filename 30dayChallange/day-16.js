process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function throwException(){
  throw new Error('Bad integer number');
}
function main() {
    try{
      const S = readLine();
      const parsed = parseInt(S, 10);
      Number.isNaN(parsed) && throwException();
      console.log(parsed);
    }catch(e){
      console.log('Bad String');
    }
}

