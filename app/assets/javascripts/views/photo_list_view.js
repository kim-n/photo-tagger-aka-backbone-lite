(function(root) {
  var PT = root.PT = (root.PT || {});

  var PhotosListView = PT.PhotosListView = function () {
    this.$el = $('<div></div>');
    PT.Photo.on("add", this.render.bind(this));
  }

  _.extend(PhotosListView.prototype, {
    render: function () {
      this.$el.empty();

      var $unorderedList = $('<ul></ul>')
      var self = this;
      PT.Photo.all.forEach(function(pic){
        $unorderedList.append('<li>' + pic.get("title") + '</li>');
      });
      this.$el.append($unorderedList);
      return this; //why not return this.el???
    }

  });

})(this);