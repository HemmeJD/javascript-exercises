const reverseString = function(string) {
    let stringArray = string.split("");
    let reverse = stringArray.reverse();
    let reverseString = reverse.join('');
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
