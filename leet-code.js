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




