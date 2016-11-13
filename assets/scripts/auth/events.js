'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');
const world = require('../global.js');


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
//   else {
//     console.log('Tie');
//     $('.win').text('TIE!');
//   //  world.ttt.gameOver = true;
// }
};

const onTileClick = function () {
  if(world.ttt.gameOver){
    return;
  }
  let tile = $(this).attr('class');
  let i = +(tile.replace(/\D/g, '')); //chrome doesn't like this line, not sure why
   if (world.ttt.player === 'X') {
     $('.'+tile).append('X');
     $('.'+tile).css('pointer-events', 'none');
     world.ttt.player = 'O';
     world.ttt.board[i] = 'X';
  } else if (world.ttt.player === 'O') {
     $('.'+tile).append('O');
     $('.'+tile).css('pointer-events', 'none');
     world.ttt.player = 'X';
     world.ttt.board[i] = 'O';
   }
   winCheck();
  };

  const onResetBoard = function () {
    world.ttt.gameOver = false;
    world.ttt.board = [];
    world.ttt.player = 'X';
    $('td').css('pointer-events', 'auto');
    $('td').html('');
    $('.win').html('');
    onTileClick();
    };

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

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('submit', onSignOut);
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
