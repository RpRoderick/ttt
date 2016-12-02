'use strict';

const store = require('../scripts/store.js');

const success = (data) => {
    store.images.id = data.image.id;
};

const failure = (error) => {
  console.error(error);
};



function renderItem(item){

let template = `<div class="col-md-8">
<div class="col-md-8">
   <a href="#">
     <img src="${item.url || "#"}" alt="Image to be linked to" class="img-responsive">
   </a>
 </div>
</div>`;
$('.col-md-8').html(template);
}

const postImageSuccess = (data) => {
 console.log(data);
 // store.users.id = data.user.id;

 renderItem(data);
};
// const getGamesSuccess = (data) => {
//     store.game = data.game;
//     // console.log(data);
//     // console.log("get game");
//     $('.statsbox')
//     .text("You've played " + data.games.length + ' games');
// };

const deleteImageSuccess = (data) => {
 console.log(data);
};

module.exports = {
  failure,
  success,
  postImageSuccess,
  deleteImageSuccess,
};
