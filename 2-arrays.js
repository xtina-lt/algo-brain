/*
GRATITUDE NOTE:
    - This makes me remember the first time I did these algos.. 
    - With a little time, effort, and lots of fun...
    - I finished these about 5 times faster lol :) !!!!!!
    - PROGRESS ISN'T A RESULT - IT'S A LIFESTYLE.
    -----------------------------------------------------
    TOPICS:
        - arr for/while loops
        - arr.pop() -> take from the front and return
        - arr.push() -> adds element to end , returns new array length
*/



// for / while loops 
// array.pop() & push()
// arrays grow: arr.length == lastIdx-1 
// if / else statements
// can contain different data types arrs are objects, passed by reference (ptr)

const ARR = ["alaska", "ireland", "maine"]




// #############################################
// SHIFT(REMOVE) FRONT
// Given an array, remove and return the value at
// the beginning of the array. Do this without using
// any built-in array methods except pop().
const myShift = arr => {
    // OBJECTIVE : RETURN VALUE REMOVED FROM FRONT
    let temp = arr[0]

    // OBJECTIVE: PULL(<--) ELEMENTS TOWARDS INDEX 0
    for (let i=0; i < arr.length; i++)
        arr[i] = arr[i+1]

    arr.length = arr.length - 1

    return temp
}

// console.log( myShift(ARR) )
// console.log(ARR)



// INSERT AT
// Given an array, index, and additional value, insert
// the value into the array at the given index. Do this
// without using built-in array methods. You can
// think of PushFront(arr,val) as equivalent to
// InsertAt(arr,0,val).
const insertAt = (arr, val, idx) => {
    
    // OBJECTIVE: PULL VALUES RIGHT TO MAKE ROOM
    for (let i = arr.length; i > idx ; i--)
        // console.log(`${arr[i-1]} to ${arr[i]}`)
        arr[i] = arr[i-1]
    
    // OBJECTIVE: INSERT VALUE INTO ARR AT IDX
    arr[idx] = val

    return arr
}

// console.log( insertAt(ARR, "jersey", 1) )



// REMOVE AT
// Given an array and an index into the array,
// remove and return the array value at that index.
// Do this without using any built-in array methods
// except pop(). Think of PopFront(arr) as
// equivalent to RemoveAt(arr,0).
const deleteAt = (arr, idx) => {
    // OBJECTIVE : ( <-- ) pull next element, keep going until last  
    // OBJECTIVE: START AT DESIRED REMOVE INDEX
    for (let i = idx; i < arr.length ; i++)
        arr[i] = arr[i+1]

    // OBJECTIVE: shorten array
    //            to account for removed element
    arr.length = arr.length - 1

    // OBJECTIVE: return updated array
    return arr
}
// console.log(ARR)
// console.log( deleteAt(ARR, 0) )





// REVERSE ARRAY
const reverse = arr => {
    // loop through until you get to the middle
    // use the length and subtract the index #
    // this gets the element that mirrors it
    for (let i=0; i < arr.length / 2; i++){
        // save value, so it doesn't get lost
        let temp = arr[i]
        // replace current element
        // with mirror element
        arr[i] = arr[arr.length-1-i]
        // replace the mirror element
        // with the current element saved
        arr[arr.length-1-i] = temp
    }

    // give the updated array back
    return arr
}

// console.log( reverse([0,1,2,3,4,5]) )

const removeNegatives = arr => {
    let count = 0;

    // 0, - 1,  2,  3,  -4
    // <-
    //    c++
    //         <- move one(couunt=1)
    //             <- move one(count =1)
    //                  c++
    for (let i = 0; i < arr.length; i++) {
        // if (arr[i] < 0) {           
        //     count++ 
        // } else {
        //     arr[i - count] = arr[i];
        // }
        (arr[i] < 0) ? 
            count++ : 
                arr[i - count] = arr[i];
    }

    // Adjust the length of the array 
    // account for negative numbers
    arr.length -= count;

    return arr;
} 

// console.log( removeNegatives([0, -1, 2, 3, -4]) )


let skyline = arr => {
    let a = 0
    let result = []
    for (let i in arr){
        // check if positive number
        if (arr[i] > 0 && 
            // check if greater 
            // than last positive number
            arr[i] > a) {
                // update positive
                a = arr[i]
                // add to the end of result
                result[result.length] = arr[i]
        }
        console.log(a)
    }

    return result
}
console.log(skyline([1,-1,7,3]))

