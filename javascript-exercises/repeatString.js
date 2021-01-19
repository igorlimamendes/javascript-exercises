const repeatString = function(string, value) {
    let finalString = "";

    if (value < 0) {
        finalString = "ERROR";
        
        return finalString;
    } else {
        for (let i = 0; i < value; i++) {
            finalString += string;
        }
    
        return finalString;
    }
}
