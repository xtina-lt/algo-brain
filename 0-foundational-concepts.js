// The “Basic 13”
// The foundation “Basic 13” algorithm challenges.


// ######################### 1 ###############################
// 1 ) Print all the integers from 1 to 255.
const printNums = () => {
    let result = ""

    for (let i = 1; i <= 255; i++) 
        result += `${i}, `
          // result       // minus space and comma
    return result.substring(0, result.length - 2) 
}
// console.log( printNums() )



// ######################### 2 ###############################
// 2 ) Print integers from 0 to 255, and with each integer print the sum so far.
const printSum = () => {
    let result = ""
    let sum = 0

    for (let i = 1; i <= 255; i++) {
        result += `${i}, `
        sum += i
    }

    console.log( result.substring(0, result.length - 2) )
    return sum
}
// console.log( printSum() )



// ######################### 3 ###############################
// 3 ) Find and Print Max
// Given an array, find and print its largest element.
const printMax = (arr) => {
    // edge case
    if (arr.length < 1) return false
    // variables needed
    let result = arr[0]

    // each element
    for (let i of arr)
        // if the element is bigger
        // it is larger -> hence max
        if (i > result) 
            // update result
            result = i

    return result
}
// console.log( printMax([-500, 4, 9, 235]) )




// ######################### 4 ###############################
// 4 ) Array with Odds
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
// console.log( arrOdds() )



// ###################### 5 ##################################
// Greater Than Y
// Given an array and a value Y, count and print the number of array values greater than Y.
const greaterThanY = (arr, val) => {
    // variables necessary
    let result = 0;

    // iterate through
    for (let i=0; i<arr.length; i++){
        // compare
        if (arr[i] > val) 
            // save
            result++
    }

    // return nums greater than count
    return result
}

// console.log( greaterThanY([1,2,3,4], 3) )



// ####################### 6 #################################
// Max, Min, Average
// Given an array, print the max, min and average values for that array.
const maxMinAv = arr => {
    //           min       max
    let result = [arr[0], arr[0]]
    let count = 0
    let sum = 0

    for (let i of arr) {
        // average = total / # of items
        count++
        sum += i

        // check for min
        if (i < arr[0]) result[0] = i
        // check for max
        if (i > arr[1]) result[1] = i
    }

    result[2] = sum / count

    return result
}

// console.log( maxMinAv([1,2,3]) )     



// ####################### 7 #################################
// Swap String For Array Negative Values
// Replace any negative array values with 'Dojo'.
const replaceNegative = arr => {
    for (let i=0; i<arr.length; i++)
        if (arr[i] < 0) arr[i] = "dojo"
    
    return arr
}
// console.log( replaceNegative([0, -1, 5, -2]) )



// ####################### 8 #################################
// Print Odds 1-255
// Print all odd integers from 1 to 255.
const printOdds = () => {
    for (let i = 1; i < 5; i++)
        if (i % 2 != 0) console.log(i)
}
// printOdds()



// ####################### 9 #################################
// Iterate and Print Array
// Iterate through a given array, printing each value.
const printArr = arr => arr.map( e => console.log(e) )
// printArr( [1,2,3] )




// ####################### 10 #################################
// Get and Print Average
// Analyze an array’s values and print the average.
let arrAvg = arr => {
    let sum = 0
    arr.map( e => sum += e)

    return sum / arr.length
}
// console.log( arrAvg([1,2,3]) )



// ####################### 11 #################################
// Square the Values
// Square each value in a given array, returning that same array with changed values.
let squareArr = arr => {
    for (let i in arr) arr[i] *= 2
    // return same arr
    // different could use map    
    return arr
}
// console.log( squareArr([1,2,3]) )



// ####################### 12 #################################
// Zero Out Negative Numbers
// Return the given array, after setting any negative values to zero.
const zeroOut = arr => {
    for (let i in arr)
        if (arr[i] < 0) arr[i] = 0
    return arr
}
// console.log( zeroOut([0, 1, -1, 2, -2]) )



// ####################### 13 #################################
// Shift Array Values
// Given an array, move all values forward by one index
// dropping the first and 
// leaving a '0' value at the
// end.
const shift = arr => {
    let temp = arr[arr.length-1]

    // 1 ) SHIFT LEFT
    for ( let i = 0; i < arr.length; i++ ) {
        arr[i] = arr[i+1]
    }
    
    // 2 )  LEAVE '0' AT THE END
    arr[arr.length-1] = 0

    return arr

}


/*


-------------JUST PLAYING------------



*/
// console.log( shift([1, 2, 3, 4, 5]) )
// let hr = new Date().getHours()
// let tod = (hr <= 10) ? "morning" : ( hr > 10 && hr < 20 ) ? "afternoon" : "evening"

// tod = "tricked you"
// let result = ""

// try{
// 	// SWITCH STATEMENT
// 	switch (tod) {
//     case "morning":
//       result = `Rise and shine`
//       break;
//     case "afternoon":
//         result = `One hour at a time`
//       break;
//     case "evening":
//         result = `Getting sleepy`
//         break;
//     default:
//          throw new Error("Ooopsie Daisy!!");
//         break;
//   }
// 	  // logging something good
//    console.log(`${result} ${hr}`)
// } catch (e){
// 	// console.log(e.message) // Ooopsie Daisy!!
//     console.error(`Found an ${e.name}...\n Try fixing:${e.message}`)
// }

