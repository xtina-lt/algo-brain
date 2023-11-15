const myFun = require('./my-fun.js')

// BLIND 75 ----------------------------------------
// Array
//   1... Two Sum
//   2... Best Time to Buy and Sell Stock
//   3... Contains Duplicate
//   4... Product of Array Except Self
//   5... Maximum Subarray
//   6... Maximum Product Subarray
//   7... Find Minimum in Rotated Sorted Array
//   8... Search in Rotated Sorted Array
//   9... 3 Sum
//   10.. Container With Most Water
// -------------------------------------------------



// -------------- # 1 TWO SUM----------------------------
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

const twoSum = (arr, target) => {
    let obj = {}
    
    for (let i in arr) {
            let essentialVal = target - arr[i]
            // if the necessary value is a valid key in the obj
            if (obj[essentialVal] !== undefined) {
                return [parseInt(obj[essentialVal]), parseInt(i)];
            } 
            obj[ arr[i] ] = i
    }
}

// // true = GO YOU, false = TRY AGAIN
// let example1 = twoSum([2,7,11,15], 9) 
// console.log( myFun.isSame(example1,[0, 1]) )

// // Input: nums = [3,2,4], target = 6
// // Output: [1,2]
// let example2 = twoSum([3,2,4], 6)
// console.log( myFun.isSame(example2, [1,2]) )

// // Input: nums = [3,3], target = 6
// // Output: [0,1]
// let example3 = twoSum([3,3], 6)
// console.log( myFun.isSame(example3, [0,1]) )

// ------------- end two sum ------------------





// -------------- # 3 CONTAINS DUPLICATE ---------------------------
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

const containsDuplicate = arr => {
    // // BRUTE FORCE
    // let obj = {}
    // for (let i=0; i<arr.length; i++){
    //     if (obj[arr[i]] !== undefined) return true
    //     obj[arr[i]] = 0
    // }
    // return false

    // // GETTING WARMER
    // let set = new Set(arr)
    // return set.size !== arr.length

    // // ONE LINER
    return new Set(arr).size !== arr.length
}


// // Input: nums = [1,2,3,1]
// // Output: true
// let example1 = containsDuplicate([1,2,3,1]) 
// console.log( myFun.isSame(example1, true) )

// // Input: nums = [1,2,3,4]
// // Output: false
// let example2 = containsDuplicate([1,2,3,4])
// console.log( myFun.isSame(example2, false) )

// // Input: nums = [3,3], target = 6
// // Output: [0,1]
// let example3 = containsDuplicate([1,1,1,3,3,4,3,2,4,2])
// console.log( myFun.isSame(example3, true) )

// ------------- end contains duplicate ------------------








