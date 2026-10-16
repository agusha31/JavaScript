'use strict'
function main(){
    const array =[
        11,
        32,
        -34,
        'Hi',
        'Nazar',
        true,
        false,
        null,
        undefined
    ];
    const types = {};
    for(elements of array){
        const type = typeof element;
        if(types[type] === undefined){
            types[type] = 0;
        }
        types[type]++;
    }
}