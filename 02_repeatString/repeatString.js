const repeatString = function(ourString, num) {
    
    let finalString = ''

    if (num<0) {
        return 'ERROR'
    }
    
    for (i=0; i < num; i++) {
        finalString += ourString;
    }

    return finalString
};

// Do not edit below this line
module.exports = repeatString;
