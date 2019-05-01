//https://www.hackerrank.com/challenges/html-attributes/problem

function forMatchedGroup(string, regex, callback) {
    if (!regex.global) {
        throw new Error('Please set flag /g of regex')
    }
    let origLastIndex = regex.lastIndex
    regex.lastIndex = 0
    let match

    while ((match = regex.exec(string)) != null) {
        callback(match)
    }
    regex.lastIndex = origLastIndex
}

export const html_attributes = (input, stdout) => {
    const reTagBoundary = /<(\w+)(\s*[^>]*?)>/gi
    const reAttribute = / (\w+)=["']/gi
    let storage = {}
    forMatchedGroup(input, reTagBoundary, group => {
        let tag = group[1]
        storage[tag] = storage[tag] || new Set()
        let attributes = group[2] || ''

        forMatchedGroup(attributes, reAttribute, g => {
            storage[tag].add(g[1])
        })
    })
    stdout.write(
        [...Object.keys(storage)]
            .sort()
            .map(
                key =>
                    `${key}:${Array.from(storage[key])
                        .sort()
                        .join(',')}`
            )
            .join('\n')
    )
}
