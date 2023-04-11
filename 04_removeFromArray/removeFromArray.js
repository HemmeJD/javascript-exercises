const removeFromArray = function(array, ...nums) {
    return array.filter(n => !nums.includes(n));
};

// Do not edit below this line
module.exports = removeFromArray;
