//                     get index from array and change it position according to offset


let defaultArr = [51, 34, 2, 67, 94, 1234, 5];


function changeValuePosition(inputArray, index, offset) {
    let loc = index + offset
    if (loc < 0 || loc >= inputArray.length) return 'wrong!'
    let n = inputArray.splice(index, 1)
    inputArray.splice(loc, 0, n[0])
    return inputArray
}


console.log(changeValuePosition(defaultArr, 3, -2))