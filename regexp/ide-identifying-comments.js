// https://www.hackerrank.com/challenges/ide-identifying-comments/problem

export const ideIdentifyingComments = (input, stdout) => {
    const re = /(\/\*[^/]*?\*\/)|(\/{2}.+)/g

    stdout.write(
        input
            .match(re)
            .join('\n')
            .split('\n')
            .map(a => a.trim())
            .join('\n')
    )
}
