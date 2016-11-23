'use strict';

// const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');
const world = require('../scripts/global.js');

const onCreateGame = function (event) {
  event.preventDefault();
  api.createGame()
    .then(ui.success)
    .catch(ui.failure);
};

const onUpdateGame = function () {
  let data = {
    "game": {
      "cell": {
        "index": world.ttt.index,
        "value": world.ttt.player === "X"?"o":"x",
      },
      "over": world.ttt.gameOver,
    },
  };

  api.updateGame(data)
    .then(ui.success)
    .catch(ui.failure);
};


const onGetAllGames = function (event) {
  event.preventDefault();
  $('.statsbox').on('click').text('TIC TAC TOE!');

  api.getAllGames()
    .then(ui.getGamesSuccess)
    .catch(ui.failure);
};

const addBoardHandlers = () => {
  $('#board').css('pointer-events', 'none');
  $('#reset').on('click', onCreateGame);
  $('td').on('click', onUpdateGame);
  $('#stats').on('click', onGetAllGames);
};


module.exports = {
  addBoardHandlers,
};
