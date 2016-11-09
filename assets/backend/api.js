'use strict';

// const config = require('../config.js');
const store = require('../scripts/store.js');


  const createGame = function () {
    return $.ajax({
      url: store.host + '/games',
      method: 'POST',
      headers: {
        Authorization: 'Token token=' + store.user.token,
      },
      game: {}
    });
  };


module.exports = {
  createGame,
};
