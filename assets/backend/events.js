'use strict';

// const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');

const onCreateGame = function (event) {
  event.preventDefault();
  api.createGame()
    .then(ui.success)
    .catch(ui.failure);
};

// const onUpdateGame = function (event) {
//   event.preventDefault();
//   api.updateGame()
//     .then(ui.success)
//     .catch(ui.failure);
// };



const addBoardHandlers = () => {
  $('#reset').on('click', onCreateGame);
  // $('td').on('click', onUpdateGame); //delete this after jquery works for gamelogic
};

module.exports = {
  addBoardHandlers,


};
