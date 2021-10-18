//                        Removing following repeated characters from a String



function cleanStr(inputStr) {
    if (typeof (inputStr) != 'string') return 'wrong!'
    let result = ''
    for (let counter = 0; counter < inputStr.length; counter++) {
        if (inputStr[counter] !== inputStr[counter + 1]) result += inputStr[counter]
    }
    return result
}

console.log(cleanStr('aaaehathaerhargzzzveeah'))