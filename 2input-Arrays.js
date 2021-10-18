//                         Removing the second Array from the first one

let firstArr = [1, 2, 3, 4, 65, 78]
let secondArr = [2, 65]


function clearJunks(firstArr, secondArr) {
    if (firstArr.length < secondArr.length) return false
    let result = [...firstArr];
    for (let i of secondArr) {
        if (result.includes(i)) {
            result.splice(result.indexOf(i), 1)
        }
    }
    return result
}


console.log(clearJunks(firstArr, secondArr))


//                                     Using map instead


function clearJunks1(firstArr, secondArr) {
    if (firstArr.length < secondArr.length) return false
    let result = [...firstArr];
    secondArr.map(item => {
        if (result.includes(item)) result.splice(result.indexOf(item), 1)
    })
    return result
}

console.log(clearJunks1(firstArr, secondArr))