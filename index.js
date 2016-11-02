'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// load manifests
// scripts
require('./assets/scripts/index.js');

// styles
require('./assets/styles/index.scss');

// attach jQuery globally
require('expose?$!jquery');
require('expose?jQuery!jquery');

const getFormFields = require('../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');

$(() => {
  $('#my-form').on('submit', function (e) {
    let data = getFormFields(this);
    e.preventDefault();
    api.myRequest(data, ui.success, ui.failure);
  });
});
