export function minSwaps(arr, n) {
    let arrPos = Array.from({ length: n }, () => {
        return { first: 0, second: 0 }
    })
    for (let i = 0; i < n; i++) {
        arrPos[i].first = arr[i]
        arrPos[i].second = i
    }
    arrPos.sort((pairA, pairB) => pairA.first - pairB.first)
    let visited = Array.from({ length: n }, () => false)
    let ans = 0

    for (let i = 0; i < n; i++) {
        if (visited[i] || arrPos[i].second === i) continue

        let cycleSize = 0
        let j = i
        while (!visited[j]) {
            visited[j] = true
            j = arrPos[j].second
            cycleSize++
        }
        if (cycleSize > 0) {
            ans += cycleSize - 1
        }
    }
    return ans
}
