'use strict';

const rangeOdd = (begin, end) => {
  if (begin % 2 === 0) begin++;
  if (end % 2 === 0) end--;
  if (begin > end) return [];
  const len = Math.floor((end - begin) / 2) + 1;
  const array = new Array(len);
  for (let i = 0; i < len; i++) {
    array[i] = begin + i * 2;
  }

  return array;
};

module.exports = { rangeOdd };
