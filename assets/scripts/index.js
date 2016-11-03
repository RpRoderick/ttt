'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
const authEvents = require('./auth/events');
const backEndEvents = require('../backend/events');

$(() => {
  authEvents.addHandlers();
  backEndEvents.addBoardHandlers();
});


// $(document).ready(function(){
//   $('td').one('click', function () {
//    if (player === 'player1') {
//     $(this).append('X');
//   }
//     else if (player === 'player2') {
//       $(this).append('O');
//     }
//     else {
//       $(this).append('player not assigned');
//     }
//   });
// });
