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
        - arr.push() -> adds to index[0], and pulls
        - arr.insertAt()
*/



// for / while loops 
// array.pop() & push()
// arrays grow: arr.length == lastIdx-1 
// if / else statements
// can contain different data types arrs are objects, passed by reference (ptr)

const ARR = ["alaska", "ireland", "maine"]

// PUSH FRONT
// Given an array and an additional value, insert this
// value at the beginning of the array. Do this
// without using any built-in array methods.
const myPush = (arr, val) => {

    // OBJECTIVE: PULL EACH ELEMENT TO THE END OF LENGTH
    for (let i=arr.length; i > 0; i--)
        arr[i] = arr[i-1]
        // console.log(`${arr[i-1]} to ${arr[i]}`)

    // OBJECTIVE: insert the desired value
    arr[0] = val

    // OBJECTIVE RETURN NEW ARRAY
    return arr
}

console.log( myPush(ARR, "jersey") )

// #############################################
// POP FRONT
// Given an array, remove and return the value at
// the beginning of the array. Do this without using
// any built-in array methods except pop().
const myPop = arr => {
    // OBJECTIVE : RETURN VALUE REMOVED FROM FRONT
    let temp = arr[0]

    // OBJECTIVE: PULL ELEMENTS TOWARDS INDEX 0
    for (let i=0; i < arr.length; i++)
        arr[i] = arr[i+1]

    arr.length = arr.length - 1

    return temp
}

// console.log( myPop(ARR) )
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