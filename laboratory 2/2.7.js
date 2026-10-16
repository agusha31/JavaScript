'use strict';

const fn = () => {
  const obj1 = { name: 'Mark' };
  let obj2 = { name: 'Mark' };

  obj1.name = 'Max';
  obj2.name = 'Max';

  obj2 = { name: 'Mark Max' };
  console.log('your name is: ' + obj2.name);
};
module.exports = { fn };