'use strict';

const store = require('../store.js');

const success = (data) => {
  $('#messages').text("Success");
  console.log(data);
};

const signInSuccess = (data) => {
  store.user = data.user;
  success(data);
  $('#reset').show();
  $('#sign-out').show();
  $('#stats').show();
  $('#change-password').show();
  $('.statsbox').show();

};

const signOutSuccess = (data) => {
  success(data);
  $('#reset').hide();
  $('#stats').hide();
  $('#change-password').hide();
  $('#sign-out').hide();
  $('.statsbox').show();
};

const failure = (error) => {
  $('#messages').text("Failure");
  console.error(error);
  $("#sign-out").click(function(){
     $("#reset").css('display', 'none');
  });
};


module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
};
