(function(root) {
  var PT = root.PT = (root.PT || {});

  var PhotosListView = PT.PhotosListView = function () {
    this.$el = $('<div></div>');
  }

  _.extend(PhotosListView.prototype, {
    render: function () {
      this.$el.empty();
      this.$el.append('<ul></ul>');

      var self = this;
      PT.Photo.all.forEach(function(pic){
        self.$el.append('<li>' + pic.title + '</li>');
      });
      return this; //why not return this.el???
    }

  });

})(this);