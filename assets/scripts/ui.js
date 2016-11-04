'use strict';

const store = require('../store.js');

const success = (data) => {
  $('#messages').text("Success");
  console.log(data);
};

const signInSuccess = data => {
  store.user = data.user;
  success(data);
};

const failure = (error) => {
  $('#messages').text("Failure");
  console.error(error);
};

module.exports = {
  failure,
  success,
  signInSuccess,
};
