'use strict';

const store = require('../store.js');

const signUp = (data) =>
  $.ajax({
    url: store.host + '/sign-up',
    method: 'POST',
    data,
  });

const signIn = (data) =>
  $.ajax({
    url: store.host + '/sign-in',
    method: 'POST',
    data,
  });

const changePassword = (data) =>
  $.ajax({
    url: store.host + '/change-password/' + store.user.id,
    method: 'PATCH',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });

  const signOut = () =>
    $.ajax({
      url: store.host + '/sign-out/' + store.user.id,
      method: 'DELETE',
      headers: {
        Authorization: 'Token token=' + store.user.token,
      },
    });

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
};
