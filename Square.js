//                              making a square with stars

function square(input) {
    if (typeof (input) != 'number' || input > 10) return 'wrong'
    for (let i = 1; i <= input; i++) {
        if (i === 1 || i === input) console.log('*'.repeat(input))
        else console.log('*' + ' '.repeat(input - 2) + '*')
    }
}


square(8)