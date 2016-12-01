'use strict';

const getFormFields = require('../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');
// const world = require('../scripts/global.js');

// const onCreateGame = function (event) {
//   event.preventDefault();
//   api.createGame()
//     // .then(ui.success)
//     .then(ui.success)
//     .catch(ui.failure);
// };
//
// const onUpdateGame = function () {
//   let data = {
//     "game": {
//       "cell": {
//         "index": world.ttt.index,
//         "value": world.ttt.player === "X"?"o":"x",
//       },
//       "over": world.ttt.gameOver,
//     },
//   };
//
//   api.updateGame(data)
//     .then(ui.success)
//     .catch(ui.failure);
// };

const onPostImage = function (event) {
  let postImage = getFormFields(event.target)
  event.preventDefault();
  api.postImage(postImage)
    .then(ui.postImageSuccess)
    .catch(ui.failure);
};

const onDeleteImage = function (event) {
  let data = getFormFields(event.target);
  event.preventDefault();
  api.deleteImage(data)
    .then(ui.success)
    .catch(ui.failure);
};

const addClueHandlers = () => {
  // $('#board').css('pointer-events', 'none');
  // $('#reset').on('click', onCreateGame);
  // $('td').on('click', onUpdateGame);
  $('#postImage').on('submit', onPostImage);
  $('#deleteImage').on('submit', onDeleteImage);
};


module.exports = {
  addClueHandlers,
};
