'use strict'
const RANGE_ODD = (start, end) =>{
    const result = [];
    for(let i = start; i <= end; i++){
        if (i%2 !== 0){
            result.push(i);
        }
    }
    return result;
};
module.exports = {RANGE_ODD};