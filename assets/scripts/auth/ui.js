'use strict';

const store = require('../store.js');

const success = (data) => {
  $('#messages').text("Success");
  console.log(data);
};

const signInSuccess = data => {
  store.user = data.user;
  success(data);
  $("#sign-in").click(function(){
     $("#reset").css('display', 'block');
   });
};

const signOutSuccess = (data) => {
  success(data);
  $("#sign-out").click(function(){
     $("#reset").css('display', 'none');
   });
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
};
