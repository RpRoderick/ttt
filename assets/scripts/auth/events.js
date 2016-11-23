'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const api = require('./api');
const ui = require('./ui');
const world = require('../global.js');



const winCheck = function() {
  let board = (world.ttt.board);
  if (board[0] && (board[0] === board[1]) && (board[1] === board[2])) {
    $('.win').text(board[0] + ' Wins!');
   world.ttt.gameOver = true;
   $('td').css('pointer-events', 'none');
   return true;

  }
  if (board[3] && (board[3] === board[4]) && (board[4] === board[5])){
    $('.win').text(board[3] + ' Wins!');
   world.ttt.gameOver = true;
   $('td').css('pointer-events', 'none');
   return true;

  }
  if (board[6] && (board[6] === board[7]) && (board[7] === board[8])){
    $('.win').text(board[7] + ' Wins!');
   world.ttt.gameOver = true;
   $('td').css('pointer-events', 'none');
   return true;

  }
  if (board[0] && (board[0] === board[3]) && (board[3] === board[6])){
    $('.win').text(board[0] + ' Wins!');
   world.ttt.gameOver = true;
   $('td').css('pointer-events', 'none');
   return true;

  }
  if (board[1] && (board[1] === board[4]) && (board[4] === board[7])){
    $('.win').text(board[1] + ' Wins!');
   world.ttt.gameOver = true;
   $('td').css('pointer-events', 'none');
   return true;

  }
  if (board[2] && (board[2] === board[5]) && (board[5] === board[8])){
    $('.win').text(board[2] + ' Wins!');
   world.ttt.gameOver = true;
   $('td').css('pointer-events', 'none');
   return true;

  }
  if (board[0] && (board[0] === board[4]) && (board[4] === board[8])){
    $('.win').text(board[0] + ' Wins!');
   world.ttt.gameOver = true;
   $('td').css('pointer-events', 'none');
   return true;
  }
  if (board[2] && (board[2] === board[4]) && (board[4] === board[6])){
    $('.win').text(board[2] + ' Wins!');
   world.ttt.gameOver = true;
   $('td').css('pointer-events', 'none');
  return true;
  }
};

const onTileClick = function () {
  if(world.ttt.gameOver){
    return;
  }
  let tile = $(this).attr('class');
  let i = +(tile.replace(/\D/g, '')); //chrome doesn't like this line, not sure why
    world.ttt.index = i;
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

   winCheck();
    if ((world.ttt.turnCount === 9) && (!winCheck())) {
     $('.win').text('TIE!');
}
  };

const onSignUp = function (event) {
  let data = getFormFields(event.target);
  event.preventDefault();
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure);
};

const onSignIn = function (event) {
  let data = getFormFields(event.target);
  event.preventDefault();
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure);
};

const onChangePassword = function (event) {
  let data = getFormFields(event.target);
  event.preventDefault();
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure);
};

const onSignOut = function (event) {
  let data = getFormFields(event.target);
  event.preventDefault();
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.failure);
};

  const onResetBoard = function () {
    world.ttt.index = 0;
    world.ttt.turnCount = 0;
    world.ttt.gameOver = false;
    world.ttt.board = [];
    world.ttt.player = 'X';
    $('td').css('pointer-events', 'auto');
    $('td').html('');
    $('.win').html('');
    };

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('submit', onSignOut);
  $('#reset').on('click', onResetBoard);
  $('td').on('click', onTileClick);
};

module.exports = {
  addHandlers,
};
