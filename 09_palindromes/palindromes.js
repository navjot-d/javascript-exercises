const palindromes = function (ourString) {

    ourString = ourString.toLowerCase();
    
    ourString = ourString.replace(/[^a-z]/gi, '')

    let ourStringArray = ourString.split("");

    let reversedString = ourString.split("");
    reversedString = reversedString.reverse();

    //let reversedStringArray = ourStringArray.reverse();
    
    for (i=0; i < ourStringArray.length; i++) {
        if (ourStringArray[i] != reversedString[i]) {
            return false
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
