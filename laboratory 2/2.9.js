'use strict';
 const phoneBook = [
    {name: 'Mark', phone: '+3801238456890'},
    {name: 'Max', phone: '+380987854321'}
];
const findPhoneByName = (name) => {
    for(const user of phoneBook) {
        if(user.name === name) {
            return obj.phone;
        }
    }
    return null;
};
module .exports = {phoneBook,findPhoneByName};