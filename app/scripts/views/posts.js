var Backbone = require('backbone');

var PostListView = Backbone.View.extend({
  tagName: 'ul',
  render: function(){
    return this;
  }
});

var PostItemView = Backbone.View.extend({
  tagName: 'li',
  render: function(){
    return this;
  }
});

module.exports = {
  'PostListView': PostListView,
  'PostItemView': PostItemView
}
