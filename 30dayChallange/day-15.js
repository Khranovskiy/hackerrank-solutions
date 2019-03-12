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
function Node(data){
    this.data=data;
    this.next=null;
}
function Solution(){

  this.insert = function(prev, data){
      //complete this method
      if(!prev) {
        return new Node(data);
      }
      const next = prev.next;
      const node = this.insert(next, data);
      if (!next) {
        prev.next = node
      }
      return prev;
    };

  this.display=function(head){