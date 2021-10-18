//                         function for reversing an string


function reversStr(str) {
    if (typeof (str) != 'string') return 'incorrect'
    if (str.length === 0) return ''
    return str[str.length - 1] + reversStr(str.substring(0, (str.length) - 1))
}


console.log(reversStr('mahdi fazli'))