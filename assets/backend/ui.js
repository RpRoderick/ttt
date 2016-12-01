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
<!-- This div contains all code relevant to img one's info-->
 <div class="col-md-8">
    <div class="row">
    <div class="col-md-4 tag-name-container"><p>Tag Name:${item.title}</p></div>
    <div class="col-md-4 artist-name-container">Artist:${item.artist}</div>
    <div class="col-md-4 location-container">Location:${item.location}</div>
    <div class="col-md-4 date-container">Date Photographed:${item.date}</div>
    <div class="col-md-4 url-container">URL:${item.url}</div>
    </div>
    <div class="row">
      <div class="col-md-12 description-container">Description</div>
    </div>
 </div>
 </div>
</div>`
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

module.exports = {
  failure,
  success,
  postImageSuccess,
  // getGamesSuccess,
};
