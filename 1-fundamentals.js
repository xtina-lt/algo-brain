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

// CHALLENGE : Generate Coin Change
// Implement generateCoinChange(cents) that accepts a parameter for the number of cents, and
// computes how to represent that amount with the smallest number of coins. Console.log the result.
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


// CHALLENGE: Statistics to Doubles
// Implement a ‘die’ that randomly returns an
// integer between 1 and 6 inclusive. Roll a pair of
// these dice, tracking the statistics until doubles
// are rolled. Display the number of rolls, min, max,
// and average.

const rollDoubles = () => {
    let map = {'rolls' : 0, 'min':0 , 'max' :0, 'pair' : false}
    let arr = []
    let total = 0

    // Math.floor( Math.floor( Math.random() * inclusiveEnd ) + inclusiveStart )
    while (!map.pair) {
        // OBJECTIVE: get two random dice rolls
        let diceA = Math.floor(Math.random() * 6) + 1
        let diceB = Math.floor(Math.random() * 6) + 1
        let current = [diceA, diceB]
        console.log(current)

        // OBJECTIVE: keep track of min and max
        // handle first roll to compare values
        if (map.rolls < 1) { 
            map.min  =diceA
            map.max = diceA
        }
        // check values
        for (let i of current) {
            if ( i < map.min ) map.min = i
            if ( i > map.max) map.max = i
        }
        
        // OBJECTIVE eep track of averange, min, and max
        total += (diceA + diceB)
        map.rolls++
        
        // check if they are pairs
        if (current[0] == current[1]) map.pair=current
    }
    
    // RETURN number of rolls, min, max, and average
    //           total / count
    //                   each roll has 2 numbers
    map["average"] = total / (map.rolls * 2)
    return map
}


// CHALLENGE: Sum To One Digit
// Implement a function sumToOne(num) that,
// given a number, sums that number’s digits
// repeatedly until the sum is only one digit. Return
// that final one digit result
const sumToOne = num => {
    let result = 0
    num = num.toString()
    
    // OBJECTIVE: if the length is not just one digit
    //            keep adding up all the digits
    while ( num.length > 1 ) {
        
        // OBJECTIVE: sum of the digits of the string 
        for (let i of num)
            result += parseInt(i)

        // OBJECTIVE: repeat 
        //   with the new converted number
        num = result.toString()
        // reset sum if need to reapeat
        if (num.length > 1) result = 0
    }

    return result
}

// Implement a function that accepts two non-negative integers as arguments. Function lastDigitAtoB(a,
//     b) should return the last digit of the first number (a) raised to an exponent of the second number (b).
//     Examples: given (3, 4), you should return 1 (the last digit of 81: 3 * 3 * 3 * 3). Given (12, 5), return
//     2 (the least significant digit of 248832, which is 12 * 12 * 12 * 12 * 12).
const lastDigitAtoB = (param0, param1) => {
    // // EDGE CASE: cannot be 0
    // if (param0 < 0 || param1 < 0)
    //     throw new Error("Numbers cannot be negative")

    // // OBJECTIVE: GET LAST DIGIT OF A**B
    // // 1 ) A ** B
    // let result = Math.pow(param0, param1)

    // // OBJECTIVE: get last digit
    // // % 10 will always have a one's remainder  
    // result = result % 10

    // // OBJECTIVE: return last significant digit(LSD)
    // return result

    // SUPERWOMAN:
    return (param0 > 0 && param1 > 0) ? 
        Math.pow(param0, param1) % 10:
            false
}



// Clock Hand Angles
// Traditional clocks are increasingly uncommon, but most can still read rotating hands of hours, minutes,
// and seconds.
// Create function clockHandAngles(seconds) that, given the number of seconds since 12:00:00, will
// print the angles (in degrees) of the hour, minute and second hands. As a quick review, there are 360
// degrees in a full arc rotation. Treat “straight-up” 12:00:00 as 0 degrees for all hands.
// 3684 = 01:01:24 = 30 deg, 6 deg, 144 deg
const secondsPastHands = num => {
    let seconds = 60
    let minutes = 60
    let hours = 12
    let degrees = {hr : 360 / hours, min : 360 / minutes, seconds : 360 / seconds }
    let time = {}

    // OBJECTIVE: CALCULATE HOURS
    let temp = Math.floor( num / (seconds * minutes) % 12 )
    time["hours"] = {num : temp, deg : temp * degrees.hr}
    // OBJECTIVE: CALCULATE MINUTES
    temp =  Math.floor(num / (minutes) % 60  )
    time["minutes"] = {num : temp, deg : temp * degrees.min}
    // OBJECTIVE: CALCULATE SECONDS
    temp = Math.floor(num % 60  )
    time["seconds"] = {num : temp, deg : temp * degrees.seconds}


    return time
}

// Just for funsies
// 01:01:24 = 30 deg, 6 deg, 144 deg
const clockAngles = str => {
    let degrees = {
        0 : "12:00:00",
        hr : 360 / 12, 
        min : 360 / 60,
        sec : 360 / 60
    }
    // minutes = 360 degrees / 60 minutes
    // 1 minute = 6 degrees
    // hours = 360 / 12 = 30
    // 1 hour = 30 degrees

    // OBJECTIVE: GETTING THE HOURS MINUTES AND SECONDS
    // 12:00:00 is 0 degrees
    //   // start and end
    //   ^  starts a string
    //   [^:] characters that are not colons
    //     [1]    first caputuring group ^
    let hours = Number( str.match(/^[^:]+/) )
        hours *= degrees.hr
    //    /: :/  matches colons before and after
    //   (.*?)   any carcahters(except newline) -> in a group
    let minutes = Number(str.match(/:(.*?):/)[1])
        minutes *= degrees.min
    //  [^:] one or more characters that are not colons
    //  $   the end of the string
    let seconds = Number( str.match(/[^:]+$/) )
        // returns [ '00', index: 6, input: '12:00:00', groups: undefined ]
        seconds *= degrees.sec

    // UPDATE THE DICIONARY
    degrees['hours'] = hours
    degrees['minutes'] = minutes
    degrees['seconds'] = seconds

    return degrees
}




// console.log( secondsPastHands(3684) )
// console.log( clockAngles("01:01:24") )
// console.log( clockAngles("12:00:00") )
// console.log( "lastDigitAtoB:", lastDigitAtoB(3,4 ) )
// console.log( "lastDigitAtoB:", lastDigitAtoB(12,5 ) )
// console.log( "lastDigitAtoB:", lastDigitAtoB(-1,5 ) )
// console.log( 'sumToOne', sumToOne(12357) )// rollDoubles()
// console.log(generateCoin(42))
// console.log(sigma(5))
// console.log(factorial(5))
// console.log(threesandFives(1, 15))