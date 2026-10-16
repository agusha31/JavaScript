'use strict';

const range = (begin, end) => {
  // +1 гарантує, що обидва бокові значення будуть включені
  const len = end - begin + 1; 
  if (len <= 0) return [];

  const array = new Array(len);
  for (let i = 0; i < len; i++) {
    array[i] = begin + i;
  }
  
  return array;
};

module.exports = { range };
