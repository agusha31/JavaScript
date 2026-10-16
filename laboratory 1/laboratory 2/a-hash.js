'use strict';

const phonebook = {
  Mark: '+3801238456890',
  Max: '+380987854321',
};

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };