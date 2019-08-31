/* eslint-disable func-style */
let merge = function(array, temp, left, mid, right) {
    let invCount = 0
    let indexInLeft = left
    let indexInRight = mid
    let indexInTemp = left
    while (indexInLeft <= mid - 1 && indexInRight <= right) {
        if (array[indexInLeft] < array[indexInRight]) {
            temp[indexInTemp++] = array[indexInLeft++]
        } else {
            temp[indexInTemp++] = array[indexInRight++]
            invCount += mid - indexInLeft
        }
    }
    while (indexInLeft <= mid - 1) {
        temp[indexInTemp++] = left[indexInLeft++]
    }
    while (indexInRight <= right) {
        temp[indexInTemp++] = right[indexInRight++]
    }
    // Copy back the merged elements to original array
    for (let i = left; i <= right; i++) {
        array[i] = temp[i]
    }
    return invCount
}

export function mergeSort(array, temp, left, right) {
    let invCount = 0
    if (right > left) {
        let mid = ~~((right + left) / 2)

        invCount = mergeSort(array, temp, left, mid)
        invCount += mergeSort(array, temp, mid + 1, right)
        invCount += merge(array, temp, left, mid + 1, right)
    }
    return invCount
}
