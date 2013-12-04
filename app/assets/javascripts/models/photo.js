(function(root) {
  var PT = root.PT = (root.PT || {})


  var Photo = PT.Photo = function (obj) {
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
            _.extend(photoObj.attributes, resp);
            Photo.all.push(photoObj);
            callback();
          },
          error: function() {alert("photo error on server")}

        });
      };
    },


    save: function (callback) {
      if (this.attributes["id"]){
        var photoObj = this;

        var photoObjCopy = _.extend({}, photoObj.attributes);
        delete photoObjCopy["created_at"];
        delete photoObjCopy["updated_at"];
        delete photoObjCopy["owner_id"];

        $.ajax({
          url: "/api/photos/" + photoObj.attributes["id"],
          type: "PUT",
          data: {photo: photoObjCopy},
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



})(this);

