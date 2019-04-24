process.stdin.resume()
process.stdin.setEncoding('ascii')

let inputStdin = ''
let inputStdinArray = ''
let inputCurrentline = 0

process.stdin.on('data', data => {
    inputStdin += data
})

process.stdin.on('end', () => {
    inputStdinArray = inputStdin.split('\n')
    main()
})
function readLine() {
    return inputStdinArray[inputCurrentline++]
}
function Node(data) {
    this.data = data
    this.next = null
}
function Solution() {
    const getNodeWithUniqueData = (data, current) => {
        let counter = 0
        while (current !== null) {
            if (!containsData(current.data, current.next)) {
                // todo: bad part
                if (current.data === data) return null
            }
            return current
        }
        current = current.next
    }
    return null
}
const containsData = (f = (data, node) => {
    if (!node) return false
    if (node.data === data) return true
    return f(data, node.next)
})

this.removeDuplicates = function (head) {
    let current = head
    while (current !== null) {
        current.next = getNodeWithUniqueData(current.data, current.next)
        current = current.next
    }
    return head
}

this.insert = function (head, data) {
    let p = new Node(data)
    if (head == null) {
        head = p
    } else if (head.next == null) {
        head.next = p
    } else {
        let start = head
        while (start.next != null) {
            start = start.next
        }
        start.next = p
    }
    return head
}

this.display = function (head) {
    let start = head
    while (start) {
        process.stdout.write(start.data + ' ')
        start = start.next
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
    head = mylist.removeDuplicates(head)
    mylist.display(head)
}
