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
};
