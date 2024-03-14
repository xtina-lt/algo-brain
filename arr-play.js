// ADD AN ELEMENT TO THE FRONT OF THE ARRAY [0]
// moving elements right
const unshiftFront = (arr, val) => {
    let temp = 0;
    
    for (let i=arr.length; i > 0; i--) {
        arr[i] = arr[i-1]
    }
    
    arr[0] = val
    
    return arr
}


// 
const pushFront = (arr, val) => {
    let temp = arr[0]

    for (let i in arr) {
        console.log(arr[i])
    }
}

// console.log( pushFront([1,2,3,4],5) )
