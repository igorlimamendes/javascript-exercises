const removeFromArray = function(arr, ...args) {
    const arrLength = arr.length;
    
    for (let i = 0; i < arrLength; i++) {
        if (arr.indexOf(args[i]) > -1) {
            let index = arr.indexOf(args[i]);
            
            arr.splice(index, 1);
        }
    }
    
    return arr;
}
