(function(root) {
  var PT = root.PT = (root.PT || {});

  var PhotoDetailView = PT.PhotoDetailView = function (photo) {
    this.$el = $('<div></div>');
    // PT.Photo.on("tag", this.render.bind(this));
    this.photo = photo;
    this.$el.on("click", "img", this.popTagSelectView.bind(this));
  }

  _.extend(PhotoDetailView.prototype, {
    render: function () {
      this.$el.empty();
      this.$el.append(JST["photo_detail"]({photo: this.photo})); // the name of the template
      return this; //why not return this.el???
    },

    popTagSelectView: function(event) {
      event.preventDefault();
      var offsetX = event.offsetX - 50;
      var offsetY = event.offsetY + 100;
      var $box = $('<div class="photo-tag"></div>')
      $box.css({position: 'absolute', left: offsetX, top: offsetY});
      this.$el.append($box)
    }

  });



})(this);