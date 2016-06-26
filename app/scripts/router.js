var $ = require('jquery');
var Backbone = require('backbone');
var views = require('./views/posts');
//var PostCollection = require('./models/posts').PostCollection;

var TheAppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'post/': 'postList',
    'post/:id/': 'postDetail',
    '(sportsing/)rob/:x/(:y/)': 'robsSportsingAnalysis'
  },
  initialize: function(){
    $('body').html('<div class="app" />');

    //this.posts = new PostCollection();
  },
  index: function(){
    $('.app')
      .html('<h1>Welcome to All Things Sportsing!</h1>')
      .append('<a href="#rob/baseball/" class="btn btn-success">Get Started!</a>');

    //this.posts.fetch();
  },
  robsSportsingAnalysis: function(something, somethingAgain){
    console.log(something);
    console.log(somethingAgain);

    $('.app').html('<img src="https://upload.wikimedia.org/wikipedia/en/b/b1/1995_World_Series_Braves_Win.jpg"/>');
  },
  postList: function(){

  },
  postDetail: function(postId){

  }
});

var router = new TheAppRouter();

module.exports = router;
