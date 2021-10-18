//                                   printing every number as much as the quantity of itself

function repeat(number) {
    if (typeof (number) != 'number') return console.log('incorrect')
    let result = 0
    for (let i = 0; i < number; i++) {
        result += (number * (10 ** i))
    }
    return result
}

function printingNumbers(number) {
    if (typeof (number) != 'number') return console.log('incorrect')
    let num = number.toString().split('')
    for (let item of num) {
        console.log(`${item}:`, repeat(item))
    }
}

printingNumbers(1465203897)