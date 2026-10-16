'use strict'
const EVERAGE = (a,b) => (a+b)/2;
const SQUARE = (x) => x*x;
const CUBE = (x) => x**3;
const CALCULATE = () =>{
    const array = [];
    for(let i=0; i<9; i++){
        const x = everage(square(i), cube(i));
        array.push(x);
    }
    return array;
};
module.exports = {SQUARE, CUBE, EVERAGE, CALCULATE};