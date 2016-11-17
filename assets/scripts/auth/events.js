'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');
const world = require('../global.js');
// const events = require('../../backend/events.js');  //this one


const winCheck = function() {
  let board = (world.ttt.board);
  if (board[0] && (board[0] === board[1]) && (board[1] === board[2])) {
    console.log('win');
    $('.win').text(board[0] + ' Wins!');
   world.ttt.gameOver = true;
  }
  if (board[3] && (board[3] === board[4]) && (board[4] === board[5])){
    console.log('win');
    $('.win').text(board[3] + ' Wins!');
   world.ttt.gameOver = true;
  }
  if (board[6] && (board[6] === board[7]) && (board[7] === board[8])){
    console.log('win');
    $('.win').text(board[7] + ' Wins!');
   world.ttt.gameOver = true;
  }
  if (board[0] && (board[0] === board[3]) && (board[3] === board[6])){
    console.log('win');
    $('.win').text(board[0] + ' Wins!');
   world.ttt.gameOver = true;
  }
  if (board[1] && (board[1] === board[4]) && (board[4] === board[7])){
    console.log('win');
    $('.win').text(board[1] + ' Wins!');
   world.ttt.gameOver = true;
  }
  if (board[2] && (board[2] === board[5]) && (board[5] === board[8])){
    console.log('win');
    $('.win').text(board[2] + ' Wins!');
   world.ttt.gameOver = true;
  }
  if (board[0] && (board[0] === board[4]) && (board[4] === board[8])){
    console.log('win');
    $('.win').text(board[0] + ' Wins!');
   world.ttt.gameOver = true;
  }
  if (board[2] && (board[2] === board[4]) && (board[4] === board[6])){
    console.log('win');
    $('.win').text(board[2] + ' Wins!');
   world.ttt.gameOver = true;
  }
};

const onTileClick = function () {
  if(world.ttt.gameOver){
    return;
  }
  let tile = $(this).attr('class');
  let i = +(tile.replace(/\D/g, '')); //chrome doesn't like this line, not sure why
    world.ttt.index = i;
    console.log('index: ' + i);
    if (world.ttt.player === 'X') {
     $('.'+tile).append('X');
     $('.'+tile).css('pointer-events', 'none');
     world.ttt.player = 'O';
     world.ttt.board[i] = 'X';
     world.ttt.turnCount++;
  } else if (world.ttt.player === 'O') {
     $('.'+tile).append('O');
     $('.'+tile).css('pointer-events', 'none');
     world.ttt.player = 'X';
     world.ttt.board[i] = 'O';
     world.ttt.turnCount++;
   }
   if ((world.ttt.turnCount === 9) && (!winCheck())) {
     $('.win').text('TIE!');
   winCheck();
 }
  };
//
//   const onResetBoard = function () {
// //turn clicks off until sign in - how?
//     $('#reset').off().on('submit', onSignIn());
//     world.ttt.index = 0;
//     world.ttt.turnCount = 0;
//     world.ttt.gameOver = false;
//     world.ttt.board = [];
//     world.ttt.player = 'X';
//     $('td').css('pointer-events', 'auto');
//     $('td').html('');
//     $('.win').html('');
//     };

const onSignUp = function (event) {
  let data = getFormFields(this);
  event.preventDefault();
  api.signUp(data)
    .then(ui.signInSuccess)
    .catch(ui.failure);
};

const onSignIn = function (event) {
  let data = getFormFields(this);
  event.preventDefault();
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.failure);
};

const onChangePassword = function (event) {
  let data = getFormFields(this);
  event.preventDefault();
  api.changePassword(data)
    .then(ui.success)
    .catch(ui.failure);
};

const onSignOut = function (event) {
  event.preventDefault();
  api.signOut()
    .then(ui.success)
    .catch(ui.failure);
};

  const onResetBoard = function () {
//turn clicks off until sign in - how?
    world.ttt.index = 0;
    world.ttt.turnCount = 0;
    world.ttt.gameOver = false;
    world.ttt.board = [];
    world.ttt.player = 'X';
    $('td').css('pointer-events', 'auto');
    $('td').html('');
    $('.win').html('');
    };

// const onGetStats = function (event) {
//   event.preventDefault();
//   api.signOut()
//     .then(ui.success)
//     .catch(ui.failure);
// };

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('submit', onSignOut);
  // $('#stats').on('submit', onGetStats);
  $('#reset').on('click', onResetBoard);
  $('.aa0').on('click', onTileClick);
  $('.ab1').on('click', onTileClick);
  $('.ac2').on('click', onTileClick);
  $('.ba3').on('click', onTileClick);
  $('.bb4').on('click', onTileClick);
  $('.bc5').on('click', onTileClick);
  $('.ca6').on('click', onTileClick);
  $('.cb7').on('click', onTileClick);
  $('.cc8').on('click', onTileClick);

};

module.exports = {
  addHandlers,
};
