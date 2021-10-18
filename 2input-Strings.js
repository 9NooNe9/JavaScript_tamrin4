//                            finding a string into another string and returning the value

function findStr(str1, str2) {
    if (str1.length < str2.length || (typeof (str1) != 'string') || (typeof (str2) != 'string')) return 'wrong!'
    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            if (str1[i + j] !== str2[j]) break
            if (j === (str2.length - 1)) return i
        }
    }
    return '-1'
}


console.log(findStr('mahdi fazli', 'faz'))