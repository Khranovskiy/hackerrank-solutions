function processData (input) {
  const languages = 'C:CPP:JAVA:PYTHON:PERL:PHP:RUBY:CSHARP:\
    HASKELL:CLOJURE:BASH:SCALA:ERLANG:CLISP:LUA:BRAINFUCK:\
    JAVASCRIPT:GO:D:OCAML:R:PASCAL:SBCL:DART:GROOVY:OBJECTIVEC'.split(
      ':'
    )

  const re = new RegExp(`^\\d{5} (${ languages.join('|') })\$`, 'i')
  input
    .trim()
    .split('\n')
    .slice(1)
    .map(line => (re.test(line) ? 'VALID' : 'INVALID'))
    .forEach(status => console.log(status))
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
