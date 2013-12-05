(function(root) {
  var PT = root.PT = (root.PT || {});

  var PhotosListView = PT.PhotosListView = function () {
    this.$el = $('<div></div>');
    PT.Photo.on("add", this.render.bind(this));
    this.$el.on("click", "a", this.showDetail); //come back to this
  }

  _.extend(PhotosListView.prototype, {
    render: function () {
      this.$el.empty();

      var $unorderedList = $('<ul></ul>')
      var self = this;
      PT.Photo.all.forEach(function(pic){
        $unorderedList.append('<li><a data-id="' + pic.get('id')  + '" href="/photos/' + pic.get('id') + '">' + pic.get('title') + '</a></li>');
      });
      this.$el.append($unorderedList);
      return this; //why not return this.el???
    },

    showDetail: function(event) {
      event.preventDefault();
      var photoId = $(event.currentTarget).attr("data-id");
      var pic = PT.Photo.find(photoId);
      PT.showPhotoDetail(pic);
    }

  });

})(this);