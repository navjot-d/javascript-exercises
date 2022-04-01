const removeFromArray = function(ourArray, ...rmvs) {
let numRemovals = rmvs.length;
let newArray = [];

for (i=0; i < rmvs.length; i++) {
    
    for (j=0; j < ourArray.length; j++) {
        if (ourArray[j] === rmvs[i]) {
            ourArray.splice(j, 1);
        }
    }
}

return ourArray

};

// Do not edit below this line
module.exports = removeFromArray;
