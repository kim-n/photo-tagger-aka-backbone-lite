(function(root) {
  var PT = root.PT = (root.PT || {});

  var PhotoDetailView = PT.PhotoDetailView = function (photo) {
    this.$el = $('<div></div>');
    this.photo = photo;
  }

  _.extend(PhotoDetailView.prototype, {
    render: function () {
      this.$el.empty();
      this.$el.append(JST["photo_detail"]({photo: this.photo})); // the name of the template
      return this; //why not return this.el???
    }

  });



})(this);