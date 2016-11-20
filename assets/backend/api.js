'use strict';

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

  const updateGame = function (data) {
    return $.ajax({
      url: store.host + '/games/' + store.game.id,
      method: 'PATCH',
      data,
      headers: {
        Authorization: 'Token token=' + store.user.token,
      },
        game: {}
    });
  };

  const getAllGames = function (player_x) {
    return $.ajax({
      url: store.host + '/games',
      method: 'GET',
      headers: {
        Authorization: 'Token token=' + store.user.token,
      },
      player_x,
    });
};

module.exports = {
  createGame,
  updateGame,
  getAllGames,
};
