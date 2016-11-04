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


    // const updateGame = function () {
    //   return $.ajax({
    //     url: store.host + '/games' + store.user.id,
    //     method: 'PATCH',
    //     headers: {
    //       Authorization: 'Token token=' + store.user.token,
    //     },
    //     game: {
    //       cell: {
    //         index: store.user.board,
    //         value: store.user.board,
    //       },
    //       over: store.value.gameover,
    //     }
    //   });
    //   };
    // const userData = (data) =>
    //   $.ajax({
    //     url: store.host + '/userData/' + store.user.id,
    //     method: 'GET',
    //     data,
    //     headers: {
    //       Authorization: 'Token token=' + store.user.token,
    //     },
    //   });
    //
    //   const userData = (data) =>
    //     $.ajax({
    //       url: store.host + '/userData/' + store.user.id,
    //       method: 'GET',
    //       data,
    //       headers: {
    //         Authorization: 'Token token=' + store.user.token,
    //       },
    //     });

module.exports = {
  createGame,
  // updateGame,
};
