// Start of function Node
function Node(data) {
    this.data = data
    this.left = null
    this.right = null
} // End of function Node

// Start of function BinarySearchTree
function BinarySearchTree() {
    this.insert = function (root, data) {
        if (root === null) {
            this.root = new Node(data)

            return this.root
        }

        if (data <= root.data) {
            if (root.left) {
                this.insert(root.left, data)
            } else {
                root.left = new Node(data)
            }
        } else if (root.right) {
            this.insert(root.right, data)
        } else {
            root.right = new Node(data)
        }

        return this.root
    }

    // Start of function levelOrder
    this.levelOrder = function (root) {
        let queue = [root]
        let current = null
        while (queue[0]) {
            current = queue.shift()
            process.stdout.write(current.data + ' ')
            if (current.left) {
                queue.push(current.left)
            }
            if (current.right) {
                queue.push(current.right)
            }
        }
        return null
    } // End of function levelOrder
} // End of function BinarySearchTree

process.stdin.resume()
process.stdin.setEncoding('ascii')

let _input = ''

process.stdin.on('data', data => {
    _input += data
})

process.stdin.on('end', () => {
    let tree = new BinarySearchTree()
    let root = null

    let values = _input.split('\n').map(Number)

    for (let i = 1; i < values.length; i++) {
        root = tree.insert(root, values[i])
    }

    tree.levelOrder(root)
})
