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
    $('td').css('pointer-events', 'none');
    $('.win').text(' ');
    $('td').text(' ');
    $('.statsbox')
    .text("You've played " + data.games.length + ' games');
};

module.exports = {
  failure,
  success,
  getGamesSuccess,
};
