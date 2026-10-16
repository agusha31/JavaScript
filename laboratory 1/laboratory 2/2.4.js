'use strict'
RANGE(15,30);
const RANGE = (start, end) => {
    const result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
};
module.exports = {RANGE};