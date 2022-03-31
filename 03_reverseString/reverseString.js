const reverseString = function(ourString) {
    let ourStringArray = ourString.split("");
    
    ourStringArray = ourStringArray.reverse();

    let reversedString = ''
    
    for (i=0; i < ourStringArray.length; i++) {
        reversedString += ourStringArray[i];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
