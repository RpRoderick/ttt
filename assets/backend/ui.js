'use strict';

const store = require('../scripts/store.js');

const success = (data) => {
    store.game = data.game;
};

const failure = (error) => {
  console.error(error);
};

const getGamesSuccess = (data) => {
    store.game = data.game;
    console.log(data);
    console.log("get game");
    $('.statsbox')
    .text("You've played " + data.games.length + ' games');
 };

module.exports = {
  failure,
  success,
  getGamesSuccess,
};
