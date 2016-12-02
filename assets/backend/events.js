'use strict';

const getFormFields = require('../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

const onPostImage = function (event) {
  event.preventDefault();
  let postImage = getFormFields(event.target);
  api.postImage(postImage)
    .then(ui.postImageSuccess)
    .catch(ui.failure);
};

const onDeleteImage = function (event) {
  event.preventDefault();
  let deleteImage = getFormFields(event.target);
  api.deleteImage(deleteImage.id)
    .then(ui.deleteImageSuccess)
    .catch(ui.failure);
};

const onUpdateImage = function (event) {
  event.preventDefault();
  let updateImage = getFormFields(event.target);
  api.updateImage(updateImage)
    .then(ui.updateImageSuccess)
    .catch(ui.failure);
};

const onViewImage = function (event) {
  event.preventDefault();
  let viewImage = getFormFields(event.target);
  api.viewImage(viewImage)
    .then(ui.viewImageSuccess)
    .catch(ui.failure);
};

const addClueHandlers = () => {
  $('#postImage').on('submit', onPostImage);
  $('#deleteImage').on('submit', onDeleteImage);
  $('#updateImage').on('submit', onUpdateImage);
  $('#viewImage').on('submit', onViewImage);

};


module.exports = {
  addClueHandlers,
};
