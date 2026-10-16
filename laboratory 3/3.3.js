'use strict';

const ipToInt = (ip = '127.0.0.1') => {
    const item = ip.split(".");
    const ipAdd = (acc, x) => (acc << 8) + parseInt(x, 10);
    return item.reduce(ipAdd, 0);
}
module.exports = { ipToInt };