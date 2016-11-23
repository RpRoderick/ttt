'use strict';

const store = require('../store.js');

const success = (data) => {
  $('#messages').text("Success");
  console.log(data);
};

const signUpSuccess = (data) => {
  store.user = data.user;
  success(data);
  $('#signUpBox').text("You Are Signed Up! Sign In Below!");
};

const signUpFailure = (data) => {
  store.user = data.user;
  success(data);
  $('#signUpBox').text("Maybe You Entered Something Wrong....Try Again.");
};

const signInSuccess = (data) => {
  store.user = data.user;
  success(data);
  $('#reset').show();
  $('#sign-out').show();
  $('#stats').show();
  $('#change-password').show();
  $('.statsbox').show();
  $('#signInBox').text('You Are Signed In!');
};

const signInFailure = (data) => {
  store.user = data.user;
  success(data);
  $('#signInBox').text('You Are NOT Signed In! Try Again.');
};

const signOutSuccess = (data) => {
  success(data);
  $('#reset').hide();
  $('#stats').hide();
  $('#change-password').hide();
  $('#sign-out').hide();
  $('.statsbox').html(' ');
  $('#signInBox').text('You Are Signed Out!');
  $('#changePasswordBox').html(' ');
  $('#signUpBox').html(' ');
  $('td').css('pointer-events', 'none');
  $('td').text(' ');
  $('.win').text(' ');
};

const changePasswordSuccess = (data) => {
  success(data);
  $('#changePasswordBox').text('Password Changed!');
};

const changePasswordFailure = (data) => {
  success(data);
  $('#changePasswordBox').text('Password NOT Changed! Try Again.');
};

const failure = (error) => {
  $('#messages').text("Failure");
  console.error(error);
};


module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  changePasswordFailure,
  signInFailure,
  signUpSuccess,
  signUpFailure,
};
