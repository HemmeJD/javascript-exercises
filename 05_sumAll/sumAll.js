const sumAll = function(numA, numB) {

        //This checks that the arguments are numbers
        if(!Number.isInteger(numA) || !Number.isInteger(numB)) {
            return "ERROR"
        }
        //This checks that the arguments are positive numbers
        if(numA < 0 || numB < 0) {
            return "ERROR"
        }
        //This puts the arguments into an array, and sorts them from least to greatest.
        //Then it will loop through the entire array from numA to numB and get the sum.
        const array = [];

        for (let i=0; i<arguments.length; i++) {
            array[i] = arguments[i];
        }
    
        const sortedArray = array.sort((a, b) => a - b);
    
        let sum = 0;
    
        for (let i = sortedArray[0]; i <= sortedArray[1]; i++) {
            sum += i;
        }
    
        return sum;
};

// Do not edit below this line
module.exports = sumAll;
