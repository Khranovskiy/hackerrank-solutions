process.stdin.resume()
process.stdin.setEncoding('ascii')

let input_stdin = ''
let input_stdin_array = ''
let input_currentline = 0

process.stdin.on('data', data => {
    input_stdin += data
})

process.stdin.on('end', () => {
    input_stdin_array = input_stdin.split('\n')
    main()
})
function readLine() {
    return input_stdin_array[input_currentline++]
}

function Solution() {
    // Write your code here
    const queue = []
    const stack = []

    ;(this.pushCharacter = function (character) {
        queue.push(character)
    }),
    (this.popCharacter = function (character) {
        return queue.pop()
    }),
    (this.enqueueCharacter = function (character) {
        stack.unshift(character)
    }),
    (this.dequeueCharacter = function (character) {
        return stack.pop()
    })
}

function main() {
    // read the string s
    let s = readLine()
    let len = s.length
    // create the Solution class object p
    let obj = new Solution()
    // push/enqueue all the characters of string s to stack
    for (var i = 0; i < len; i++) {
        obj.pushCharacter(s.charAt(i))
        obj.enqueueCharacter(s.charAt(i))
    }

    let isPalindrome = true
    /*
    pop the top character from stack
    dequeue the first character from queue
    compare both the characters */

    for (var i = 0; i < len / 2; i++) {
        if (obj.popCharacter() != obj.dequeueCharacter()) {
            isPalindrome = false
            break
        }
    }
    // finally print whether string s is palindrome or not

    if (isPalindrome) console.log('The word, ' + s + ', is a palindrome.')
    else console.log('The word, ' + s + ', is not a palindrome.')
}
