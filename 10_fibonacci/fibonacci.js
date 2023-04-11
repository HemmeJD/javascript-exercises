const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS"
    }

    let input = parseInt(num);
    let fibArr = [0, 1];


    for (let i = 2; i <= input; i++) {
        fibArr[i] = fibArr[i - 2] + fibArr[i - 1];
    }

    return fibArr[input];
};

// Do not edit below this line
module.exports = fibonacci;
