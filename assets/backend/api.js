'use strict';

const store = require('../scripts/store.js');

  const postImage = function (data) {
    return $.ajax({
      url: store.host + '/images/',
      method: 'POST',
      headers: {
        Authorization: 'Token token=' + store.user.token,
      },
data
    });
  };

  const deleteImage = function () {
    return $.ajax({
      url: store.host + '/posts/' + store.user.id,
      method: 'DELETE',
      headers: {
        Authorization: 'Token token=' + store.user.token,
      },
    });
  };
//   const updateGame = function (data) {
//     return $.ajax({
//       url: store.host + '/games/' + store.game.id,
//       method: 'PATCH',
//       data,
//       headers: {
//         Authorization: 'Token token=' + store.user.token,
//       },
//         game: {}
//     });
//   };
//
//   const getAllGames = function (player_x) {
//     return $.ajax({
//       url: store.host + '/games',
//       method: 'GET',
//       headers: {
//         Authorization: 'Token token=' + store.user.token,
//       },
//       player_x,
//     });
// };

module.exports = {
  postImage,
  deleteImage,
  // createGame,
  // updateGame,
  // getAllGames,
};
