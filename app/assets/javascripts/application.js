// This is a manifest file that'll be compiled into application.js,
// which will include all the files listed below.
//
// Any JavaScript/Coffee file within this directory,
// lib/assets/javascripts, vendor/assets/javascripts, or
// vendor/assets/javascripts of plugins, if any, can be referenced
// here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll
// appear at the bottom of the the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE
// PROCESSED, ANY BLANK LINE SHOULD GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require jquery.serializeJSON
//= require underscore
//
//= require_tree ./models
//= require_tree ../templates
//
//= require_tree .

/*
_.extend(PT, {
  initialize:   function () {
    PT.Photo.fetchByUserId(CURRENT_USER_ID, function () {
      PT.showPhotosIndex();
    });
  },

  showPhotoDetail: function (photo) {
    var content = $("#content");

    var photoDetailView = new PT.PhotoDetailView(photo);
    content.html(photoDetailView.render().$el);
  },

  showPhotosIndex: function () {
    var content = $("#content");
    content.empty();

    var photosListView = new PT.PhotosListView();
    content.append(photosListView.render().$el);

    var photoFormView = new PT.PhotoFormView();
    content.append(photoFormView.render().$el);
  },
});
*/

var Photo = function (obj) {
  this.attributes = obj
}


_.extend(Photo.prototype, {
  get: function (attr_name) {
    return this.attributes[attr_name];
  },

  set: function (attr_name, val) {
    this.attributes[attr_name] = val;
  },

  create: function (callback) {
    if (this.attributes["id"]){
      return;
    } else {
      var photoObj = this;
      $.ajax({
        url: "/api/photos",
        type: "POST",
        data: {photo: photoObj.attributes},
        dataType: 'json', // confirm this works as expected
        success: function (resp) {
          console.log(resp)
          _.extend(photoObj.attributes, resp);
          callback();
        },
        error: function() {alert("photo error on server")}

      });
    };
  },


  save: function (callback) {
    if (this.attributes["id"]){
      var photoObj = this;
      $.ajax({
        url: "/api/photos/" + this.attributes["id"],
        type: "PUT",
        data: photoObj.attributes,
        dataType: 'json',  // confirm this works as expected
        success: function (resp) {
          _.extend(photoObj.attributes, resp);
          callback();
        },
        error: function() {alert("photo error on server")}

      });
    } else {
      this.create(callback);
    };
  }

});

_.extend(Photo, {

  all: [],

  fetchByUserId: function(userId, callback){
    $.ajax({
      url:  "/api/users/" + userId + "/photos",
      type: "GET",
      dataType: 'json',  // confirm this works as expected
      success: function (resp) {
        resp.forEach(function(picObj){
          Photo.all.push(new Photo(picObj));
        });
        callback();
      },
      error: function() {alert("photo error on server")}

    });
  }

});
