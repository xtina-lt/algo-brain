// let str = "2023-11-10T12:34:56Z"
// console.log(Date(str))

const mergeWhile = (x, y) => {
    let result = ""
    let longest = (x.length >= y.length) ? x.length : y.length
    let i=0

    while (i < longest) {
        if (i < x.length) result += x[i]
        if (i < y.length) result += y[i]
        i++
    }

    return result
}

const mergeFor = (x, y) => {
    let result = ""
    let longest = (x.length >= y.length) ? x.length : y.length

    for (let i=0; i < longest; i++) {
        if (i < x.length) result += x[i]
        if (i < y.length) result += y[i]
    }

    return result
}

// adbecf
// adbc
// adef
// console.log(mergeWhile("abc", "def"))
// console.log(mergeWhile("abc", "d"))
// console.log(mergeWhile("a", "def"))
