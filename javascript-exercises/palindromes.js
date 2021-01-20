const palindromes = function(str) {
    let regex = /[\W_]/g;
    let origiStr = str.toLowerCase().replace(regex, "");
    let finalStr = origiStr.split("").reverse().join(""); 
    
    return finalStr === origiStr;
}
