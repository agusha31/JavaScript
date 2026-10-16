'use strict'

function MAIN() {
    const array = [
        'word',
        null,
        1,
        -400,
        undefined,
        false,
        'Hi',
        true,
        1.45,
        92,
        423,
        'day',
        'night'];
    const types = {
        boolean: 0,
        string: 0,
        string: 0,
        undefined: 0,
        object: 0
    };
    for(element of array){
        const type = typeof element;
        types[type]++;
    }
};