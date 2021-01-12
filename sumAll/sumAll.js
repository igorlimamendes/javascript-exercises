const sumAll = function(num1, num2) {
    let result = 0;
    let min = 0;
    let max = 0;

    if (num1 < 0 || num2 < 0 || Array.isArray(num1) === true || Array.isArray(num2) === true || typeof num1 === "string" || typeof num2 === "string") {
        result = "ERROR";
    } else {
        if (num1 < num2) {
            min = num1;
            max = num2;
        } else {
            min = num2;
            max = num1;
        }

        for (let i = min; i <= max; i++) {
            result += i;
        }
    }

    return result;
}
