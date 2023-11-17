// The “Basic 13”
// The foundation “Basic 13” algorithm challenges.



// 1 ) Print all the integers from 1 to 255.
const printNums = () => {
    let result = ""

    for (let i = 1; i <= 255; i++) result += `${i}, `

    console.log( result.substring(0, result.length - 2) )
}
// printNums()


// 2 ) Print integers from 0 to 255, and with each integer print the sum so far.
const printSum = () => {
    let result = ""
    let sum = 0

    for (let i = 1; i <= 255; i++) {
        result += `${i}, `
        sum += i
    }

    console.log( result.substring(0, result.length - 2) )
    console.log("The summation is: ", sum)
}
// printSum()




// 3 ) Find and Print Max
// Given an array, find and print its largest element.
const printMax = (arr) => {
    if (arr.length < 1) return false
    let result = arr[0]

    for (let i of arr) {
        if (i > result) result = i
    }

    return result
}
// printMax([-500, 4, 9, 235])

// Array with Odds
// Create an array with all the odd integers between 1 and 255 (inclusive).
const arrOdds = () => {
    // variables necessary
    let result = []

    //           inclusive
    for (let i=1; i <= 255; i++) 
      // not even means odd
        if ( i % 2 !==0) 
            //      add to last
            result[result.length] = i
    
    // magic
    return result
}
console.log( arrOdds() )


// Greater Than Y
// Given an array and a value Y, count and print the number of array values greater than Y.


// Max, Min, Average
// Given an array, print the max, min and average values for that array.


// Swap String For Array Negative Values
// Replace any negative array values with 'Dojo'.
