(function(root) {
  var PT = root.PT = (root.PT || {});

  var PhotoFormView = PT.PhotoFormView = function () {
    this.$el = $('<div></div>');
    this.$el.on("submit", this.submit); //come back to this
  }

  _.extend(PhotoFormView.prototype, {
    render: function () {
      this.$el.empty();
      this.$el.append(JST["photo_form"]());
      return this; //why not return this.el???
    },

    submit: function (event) {
      event.preventDefault();
      console.log(event);
      var newPhotoObj = $('#new-photo-form').serializeJSON();

      var newPhoto = new PT.Photo(newPhotoObj["photo"]);
      newPhoto.create(function(){});
    }

  });

})(this);