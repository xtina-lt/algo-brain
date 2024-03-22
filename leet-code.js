const check = require('./my-fun.js') 


/*
217 CONTAINS DUPLICATE
*/

const containsDup = arr => {
    // set pulls all the unique values
    let set = new Set(arr)

    // size checks the length
    // if they are the same => all different
    // looking for same
    return set.size !== arr.length 
}


// check( containsDup([1,2,3,1]) , true)
// check( containsDup([1,2,3,4]) , false)
// check( containsDup([1,1,1,3,3,4,3,2,4,2]) , true )

/*
1358. Number of Substrings Containing All Three Characters
Given a string s consisting only of characters a, b and c.

Return the number of substrings containing at least one occurrence of all these characters a, b and c.

 

Example 1:

Input: s = "abcabc"
Output: 10
Explanation: The substrings containing at least one occurrence of the characters a, b and c are "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" and "abc" (again). 
Example 2:

Input: s = "aaacb"
Output: 3
Explanation: The substrings containing at least one occurrence of the characters a, b and c are "aaacb", "aacb" and "acb". 
Example 3:

Input: s = "abc"
Output: 1

*/

// const numOfSubstr= str => {
//     let abc = new Set(["a", "b", "c"])
//     let result = 0
//     let start = 0
//     let end = 2

//     // while the end is not at the end
//     // while the window is not more than 3 chars
//     while (start < str.length/2) {
//         console.log( str[start] )

//         let temp = new Set([str[start], str[end-start], str[end]])
//         console.log( temp, abc )

//         if ( temp.size == abc.size) {
//             result++
//             console.log("same")
//         }
        
        
//         start++
//         end++
//     }
    
//     return result
// }

// numOfSubstr("aaacb")


