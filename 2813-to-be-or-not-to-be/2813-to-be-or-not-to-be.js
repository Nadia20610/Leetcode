/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe : function(otherVal){
                    if (val === otherVal){
                        return true;
                    }
                    else{
                        throw new Error("Not Equal");
                    }
            },
        notToBe: function(otherVal){
                    if (val !== otherVal){
                        return true;
                    }
                    else{
                        throw new Error("Equal");
                    }
            }
    };
};

try{
     console.log( expect(5).toBe(5) ); // true
} catch(error) {
    console.log(error.mes);
}
try{
     console.log( expect(5).notToBe(5) ); // throws "Equal"
} catch(error){
    console.log(error.mes);
}
