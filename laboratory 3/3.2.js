'use strict';

const generateKey = (length, chars) => {
  let key = '';
  for (let i = 0; i < length; i++) {
    const idx = Math.floor(Math.random() * chars.length);
    key += chars[idx];
  }
  return key;
};

module.exports = { generateKey };
