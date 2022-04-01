const sumAll = function(num1, num2) {
    let sum = 0;
    let sumArray = [];
    let smallNum = 0;
    let largeNum = 0;

    if (num1 < 0 || num2 < 0) {
        return 'ERROR'
    }

    if (num1 < 0 || num2 < 0) {
        return 'ERROR'
    }

    if (typeof(num1,num2) != 'number') {
        return 'ERROR'
    }

    if (num1 < num2) {
        smallNum = num1;
        largeNum = num2;
    }
    else {
        smallNum = num2;
        largeNum = num1;
    }
    

    for (let i = smallNum; i <= largeNum; i++) {
        sum = sum + i;
    }

    // for (j=0; j <= sumArray.length; j++) {
    //     sum = sum + sumArray[j];
    // }

    return sum;

};

sumAll(1,5)

// Do not edit below this line
module.exports = sumAll;
