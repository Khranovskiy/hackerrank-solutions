process.stdin.resume()
process.stdin.setEncoding('ascii')

let input_stdin = ''
let input_stdin_array = ''
let input_currentline = 0

process.stdin.on('data', function(data) {
    input_stdin += data
})

process.stdin.on('end', function() {
    input_stdin_array = input_stdin.split('\n')
    main()
})
function readLine() {
    return input_stdin_array[input_currentline++]
}
function Node(data) {
    this.data = data
    this.next = null
}
function Solution() {
    this.insert = function(prev, data) {
        // complete this method
        if (!prev) {
            return new Node(data)
        }
        const next = prev.next
        const node = this.insert(next, data)
        if (!next) {
            prev.next = node
        }
        return prev
    }

    this.display = function(head) {
        let start = head
        while (start) {
            process.stdout.write(start.data + ' ')
            start = start.next
        }
    }
}
function main() {
    let T = parseInt(readLine())
    let head = null
    let mylist = new Solution()
    for (i = 0; i < T; i++) {
        let data = parseInt(readLine())
        head = mylist.insert(head, data)
    }
    mylist.display(head)
}
