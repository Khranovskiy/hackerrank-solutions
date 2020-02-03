function processData(input) {
  var n = parseInt(input);
  console.log(memoizer(fibonacciRec)(n));
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
function memoizer(fun){
  let cache = {}
  return function (n){
      if (cache[n] != undefined ) {
        return cache[n]
      } else {
        let result = fun(n)
        cache[n] = result
        return result
      }
  }
}
function fibonacciRec(n) {
  if (n === 0) {
    return 0
  }
  if (n === 1) {
      return 1
  }
  let result = fibonacciRec(n - 1) + fibonacciRec(n - 2);
  return result
}
function fibonacciMemo(n, memo) {
  memo = memo || {}
  if (memo[n]) {
      return memo[n]
  }
  if (n === 0) {
    return 0
  }
  if (n === 1) {
      return 1
  }
  return memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo)
}
