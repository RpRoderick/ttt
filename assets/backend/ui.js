'use strict';

const store = require('../scripts/store.js');

const success = (data) => {
    store.game = data.game;
    console.log(data);
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  failure,
  success,
};
