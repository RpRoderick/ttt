'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');
const world = require('../global.js');

//this is what I was doing at first, it wasn't working, so I started my javascript over
//$('td').one('click', /*toggle*/ (function () {
  //if (player_x)
  //   $(this).append('X');
    //  if (player_o) {
      //$(this).append('O');
    //})
    //else {
      // $(this).append('player not assigned');
     //}
     //onUpdateGame(); //(this goes under click event to Update the game in API)
//});
//);
// const toggle = function (a, b) {
//     let togg = false;
//     return function () {
//         return (togg = !togg) ? a() : b();
//     };
// };

//CAN I JUST USE .SWITCH UNDER APPEND INSTEAD OF TOGGLING?
const winCheck = function () {

  let board = (world.ttt.board);

  if (board[0] && (board[0] === board[1]) && (board[1] === board[2])) {
    console.log('win');  //if these 3 values match=win.
    $('.win-message').text(board[0] + ' wins!');
    gameOver = true;   //if win, go to end game function
    //if they don't match, continue playing
  }
  if (board[3] && (board[3] === board[4]) && (board[4] === board[5])){
    console.log('win');
    $('.win-message').text(board[0] + ' wins!');
    gameOver = true;
  }
  if (board[6] && (board[6] === board[7]) && (board[7] === board[8])){
    console.log('win');
    $('.win-message').text(board[0] + ' wins!');
    gameOver = true;
  }
  if (board[0] && (board[0] === board[3]) && (board[3] === board[6])){
    console.log('win');
    $('.win-message').text(board[0] + ' wins!');
    gameOver = true;
  }
  if (board[1] && (board[1] === board[4]) && (board[4] === board[7])){
    console.log('win');
    $('.win-message').text(board[0] + ' wins!');
    gameOver = true;
  }
  if (board[2] && (board[2] === board[5]) && (board[5] === board[8])){
    console.log('win');
    $('.win-message').text(board[0] + ' wins!');
    gameOver = true;
  }
  if (board[0] && (board[0] === board[4]) && (board[4] === board[8])){
    console.log('win');
    $('.win-message').text(board[0] + ' wins!');
    gameOver = true;
  }
  if (board[2] && (board[2] === board[4]) && (board[4] === board[6])){
    console.log('win');
    $('.win-message').text(board[0] + ' wins!');
    gameOver = true;
  }

};


const onTileClick = function () {
  let tile = $(this).attr('class');
  let i = +(tile.replace(/\D/g, ''));
   if (world.ttt.player === 'x') {
     $('.'+tile).append('X');
     world.ttt.player = 'o';
     world.ttt.board[i] = 'x';
  } else if (world.ttt.player === 'o') {
     $('.'+tile).append('O');
     world.ttt.player = 'x'; //swicthing player
     world.ttt.board[i] = 'o';
  }
    if (winCheck()) {
 console.log('you win');
    }


    console.log(world.ttt.board);
};


// const endGame = function () {
//
// };
//   //if win or board full, stop click function, declare winner


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
  $('.aa0').one('click', onTileClick);
  $('.ab1').one('click', onTileClick);
  $('.ac2').one('click', onTileClick);
  $('.ba3').one('click', onTileClick);
  $('.bb4').one('click', onTileClick);
  $('.bc5').one('click', onTileClick);
  $('.ca6').one('click', onTileClick);
  $('.cb7').one('click', onTileClick);
  $('.cc8').one('click', onTileClick);
};

module.exports = {
  addHandlers,

};
