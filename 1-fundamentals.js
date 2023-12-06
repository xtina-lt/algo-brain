/*
    Important Methods:
    for loops, 
    while loops 
    if / else statements 
    % (called modulus)
    Math.random,  Math.floor, Math.ceil 
console.log
*/



// given a number, 
// returns the sum of all positive integers
// from 1 up to number (inclusive). 
// Ex.: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).
const sigma = e => {
    let result = 1

    for (let i = 2; i <= e; i++)
        result += i

    return result
}


// Write a function factorial(num) that, 
// given a number, 
// returns the product (multiplication) of all
// positive integers from 1 up to number (inclusive).
// For example, factorial(3) = 6 (or 1 * 2 * 3);
// factorial(5) = 120 (or 1 * 2 * 3 * 4 * 5).
const factorial = e => {
    let result = 1

    for (let i = 2; i <= e; i++)
        result *= i

    return result
}


const threesandFives = (paramX, paramY) => {
    let result = 0;

    for (let i = paramX; i <= paramY; i++) {
        if (i % 15 !== 0 &&
            (i % 5 === 0 || i % 3 === 0)) {
            result += i
        }
    }

    return result

}


const generateCoin = cents => {
    let map = {
        "quarter": 0,
        "dime": 0,
        "nickel": 0,
        "penny": 0
    }

    for (let key in map) {
        // initiate the diviser
        // use the names for the numbers
        let num = (key == "quarter") ? 25
            : (key == "dime") ? 10
                : (key == "nickel") ? 5
                    : 1
        // update the map
        map[key] = Math.floor(cents / num)
        // removing the last coins from the amount
        // use modulus to get the remaining amount
        cents = cents % num
        console.log(`${key} : ${map[key]} , Remaining :  ${cents}`)

        if (cents == 0) break;
    }


    return map
}



// console.log(sigma(5))
// console.log(factorial(5))
// console.log(threesandFives(1, 15))
// console.log(generateCoin(42))