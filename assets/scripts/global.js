'use strict';

const toggle = function (a, b) {
    let togg = false;
    return function () {
        // passes return value back to caller
        return (togg = !togg) ? a() : b();
    };
};
module.exports = {
  toggle,

};
