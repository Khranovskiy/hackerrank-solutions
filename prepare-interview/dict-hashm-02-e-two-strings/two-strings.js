export function twoStrings(s1, s2) {
    let set1 = new Set(s1)
    let set2 = new Set(s2)
    let intersection = new Set([...set1].filter(x => set2.has(x)))
    if (intersection.size > 0) {
        return 'YES'
    }
    return 'NO'
}
