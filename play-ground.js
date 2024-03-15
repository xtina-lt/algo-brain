// visualgo.net

// // let str = "2023-11-10T12:34:56Z"
// // console.log(Date(str))

// const mergeWhile = (x, y) => {
//     let result = ""
//     let longest = (x.length >= y.length) ? x.length : y.length
//     let i=0

//     while (i < longest) {
//         if (i < x.length) result += x[i]
//         if (i < y.length) result += y[i]
//         i++
//     }

//     return result
// }

// const mergeFor = (x, y) => {
//     let result = ""
//     let longest = (x.length >= y.length) ? x.length : y.length

//     for (let i=0; i < longest; i++) {
//         if (i < x.length) result += x[i]
//         if (i < y.length) result += y[i]
//     }

//     return result
// }

// // adbecf
// // adbc
// // adef
// // console.log(mergeWhile("abc", "def"))
// // console.log(mergeWhile("abc", "d"))
// // console.log(mergeWhile("a", "def"))


// const test0 = () => {
//     let arr = [4,3,1,3,4]
//     let result = 0
//     for (i of arr){
//         console.log(`i=${i}, result=${result} \ni ^ result = ${i ^ result}`)
//         result = i ^ result
//     }     
    
//     console.log(result)
// }

removeDupes = (arr) => {
    let count = 0;
    let pointer = 0;

    for (let current = 0; current < arr.length; current++) {
        // skip if current element is equal to next
        if (arr[current] == arr[current + 1]) {
            // if same as next
            // add to the count
            count++
            console.log("count: " + count)
            continue;
        }
        // if left, add to front using diffent count
        arr[pointer] = arr[current];
        pointer++;
        console.log("pointer: " + pointer)
    }
    // change length
    arr.length = arr.length - count
    console.log(arr)
};
// removeDupes([0,1,1,1,2,5,5,5,5])



removeVals = (arr,start,end) => {
    let count = 0;
    let pointer = 0;

    for (let current = 0; current < arr.length; current++) {
        // skip if current element is equal to next
        if (current >= start && current <= end) {
            // if same as next
            // add to the count
            count++
            console.log("count: " + count)
            continue;
        }
        // pointer pull left
        arr[pointer] = arr[current];
        pointer++;
        console.log("pointer: " + pointer)
    }
    // change length
    arr.length = arr.length - count
    console.log(arr)
};
// removeVals([0,1,1,1,2,5,5,5,5], 1, 3)

let ransomNote = (ransomNote, magazine) =>{
    let map = {} //O(1)
    for (let e of magazine){
        if (map[e] === undefined){
            map[e] = 0
        } else {
            map[e]++
        }
    }
    console.log("first loop map", map)
    for (let e of ransomNote){
        console.log(map, map[e])
        if (map[e] === undefined || (map[e] < 0) ){
            console.log("undefined || < 0", map[e])
            return false
        } else {
            map[e]--
        }
    }
    console.log("final", map)
    return true
}


// console.log(ransomNote("aa", "aab"))



const links = () => {
 //SLL NODE
class Unicorn {
    constructor(data, right=null, left=null){
        this.data = data
        this.right = right
    }
}


const uni10 = new Unicorn(10)
// console.log( uni10 )
const uni20 = new Unicorn(20, uni10)
// console.log(uni20)




class Magical{
    constructor(head=null){
        this.head = head
    }

    // ADD TO LEFT
    addFront(e){
        // O(1)
        e.right = this.head
        this.head = e
    }


    // ADD TO FAR RIGHT AKA BACK
    addBack(e){
        // edge
        if (this.head === null) {
            this.head = e
            return this
        }

        // start point
        let runner = this.head
        // go to the very end aka when there is null
        while (runner.right !== null){
            runner = runner.right
        }
        // replace null with node
        runner.right = e
    }


    removeFront(){
        // already empty
        if (this.head == null) return null
        // this.head.next == null
        

        let temp = this.head
        this.head = this.head.right
        temp.right = null
        return temp
    }

    logAll(){
        // start at the head
        let runner = this.head

        // read all right 
        while (runner.right !== null){
            console.log(runner.data)
            runner = runner.right
        }

        // read very last
        console.log(runner.data)
    }
}

// 25, 15, 5, 10, 20, 30

// the last is the head
const magical = new Magical()
magical.addBack(new Unicorn(10))
magical.addBack(new Unicorn(20))
// console.log("first list", magical);
magical.addFront( new Unicorn(5) )
// console.log("added front", magical)
magical.addFront( new Unicorn(15) )
// console.log("added front again",magical)
magical.addFront( new Unicorn(25) )
// console.log("added front third",magical)
console.log(magical)
// magical.logAll()
magical.addBack(new Unicorn(30))
magical.removeFront()
magical.logAll()

}



const labels = () => {
    let result = 10
    first: while (true) {
        // stop at 3 !'s
        if (result % 2 === 0)
            console.log("even ", result)
    
        // get loopy
        second: while (true){
            if (result % 2 !== 0)
                console.log("odd ", result)
            if (result < 0) break first
            result--
        }
    }
    
}
// labels()


/*
              SLL     ARRAY
Add to front  O(1)    O(N)
add to back   O(N)    O(1)

*/


// given a roman numberal covnert to an integer
const romanToInt = s => {
    let map = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000, result:0}

    for (let i = 0; i < s.length; i++) {
        // if the right is larger than the left
        // must subract
        (map[s[i]] < map[s[i + 1]]) ?
            map['result'] -= map[s[i]] :
            map['result'] += map[s[i]]
    }
    return map['result']
}

// console.log( romanToInt("MCMXCIV") )

// I: III, O: 3
// I: LVIII, O: 58

// MCMXCIV , 1994


let res = {ing1: "bacon", ing2: "eggs", ing3: "cheese", ing4: "corn"}
let arr = []
for (let i=1; i < 4; i++){
    arr.push(res[`ing${i}`])
}
console.log(arr)






