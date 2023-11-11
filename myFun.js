module.exports = {
    isSame : (arrX, arrY) => ( 
        JSON.stringify(arrX) == JSON.stringify(arrY) ) ? 
            "PASSED :)" : 
            `BOO :(` ,

    capitalize : e => `${e.charAt(0).toUpperCase()}${e.slice(1)}`,
      
};