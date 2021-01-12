const reverseString = function(str) {
    const splitStr = str.split("");
    str = "";

    for (let i = splitStr.length - 1; i >= 0; i--) {
        str += splitStr[i];
    }

    return str;
}
