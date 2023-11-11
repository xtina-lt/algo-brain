module.exports = {
    isSame : (arrX, arrY) => ( 
        JSON.stringify(arrX) == JSON.stringify(arrY) ) ? 
            "PASSED :)" : 
            `BOO :(` ,

    test : () => console.log("success")
      
  };