const palindromes = function (string) {

    //This takes the string and removes punctuation, spaces, and makes all letters lowercase
    let punctuationLess = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    let fullStr = punctuationLess.replace(/\s/g, "");
    let finalStr = fullStr.toLowerCase();
    
    //This returns the string in reverse
    let splitStr = finalStr.split("");
    let reverseArr = splitStr.reverse();
    let reverseStr = reverseArr.join("");

    //This checks if the reversed string is equal to the input. If so, returns true
    if (reverseStr == finalStr) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
