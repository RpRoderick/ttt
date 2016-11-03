'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');

// const toggle = function (a, b) {
//     let togg = false;
//     return function () {
//         return (togg = !togg) ? a() : b();
//     };
// };

//CAN I JUST USE .SWITCH UNDER APPEND INSTEAD OF TOGGLING?

$('td').one('click', /*toggle*/ (function () {
//if (player === a)
     $(this).append('X');
     //else if (player === b) {
      //$(this).append('O');
    }));
  //   else {
    //   $(this).append('player not assigned');
     //}
     //
//});


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
};

module.exports = {
  addHandlers,

};
