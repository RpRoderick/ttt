'use strict';

// const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');
// require('../auth/events.js');

const onCreateGame = function (event) {
  event.preventDefault();
  api.createGame()
    .then(ui.success)
    .catch(ui.failure);
};

const onUpdateGame = function (event) {
  event.preventDefault();
  api.updateGame()
    .then(ui.success) //fails here
    .catch(ui.failure);
};

const addBoardHandlers = () => {
  $('#reset').on('click', onCreateGame);
  $('td').on('click', onUpdateGame);
};

module.exports = {
  addBoardHandlers,


};
