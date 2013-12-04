(function(root) {
  var PT = root.PT = (root.PT || {});

  var PhotoFormView = PT.PhotoFormView = function () {
    this.$el = $('<div></div>');
  }

  _.extend(PhotoFormView.prototype, {
    render: function () {
      this.$el.empty();
      console.log($('#new-photo-form'))
      this.$el.append(JST["photo_form"]());
      return this; //why not return this.el???
    }

  });

})(this);