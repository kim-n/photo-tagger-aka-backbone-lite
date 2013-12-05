(function(root) {
  var PT = root.PT = (root.PT || {});

  var TagSelectView = PT.TagSelectView = function (photo, event) {
    this.$el = $('<div></div>');
    // PT.Photo.on("tag", this.render.bind(this));
    this.photo = photo;
  };

  _.extend(TagSelectView.prototype, {
    render: function () {
      this.$el.empty();
      var obj = JSON.parse($('#bootstrapped_users_json').html())
      this.$el.append(JST["tag_select"]({users: obj})); // the name of the template

      return this; //why not return this.el???
    }



  });

})(this);