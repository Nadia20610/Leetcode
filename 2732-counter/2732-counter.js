/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let count = n; //10  
    return function() {
        let currentValue = count; //10 //11
        count += 1; //11  //12
        return currentValue; //10 //11
    };
};

const counter = createCounter(10) 
counter()
counter() 
counter() 
 