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

const onTileClick = function () {
  let tile = $(this).attr('class');
  let i = +(tile.replace(/\D/g, ''));
   if (world.ttt.player === 'x') {
     $('.'+tile).append('X');
     world.ttt.player = 'o';
  } else if (world.ttt.player === 'o') {
     $('.'+tile).append('O');
     world.ttt.player = 'x';
   }
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
