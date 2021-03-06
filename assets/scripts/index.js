'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
const authEvents = require('./auth/events.js');
const backEndEvents = require('../backend/events.js');

$(() => {
  authEvents.addHandlers();
  backEndEvents.addBoardHandlers();
  $('#reset').hide();
  $('#stats').hide();
  $('#sign-out').hide();
  $('#change-password').hide();
});
