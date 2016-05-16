var keys = require('../config/apikeys');

var fb_userToken = keys.fb_userToken;
var fb_ID = keys.fb_ID;

var tinder = require('tinderjs');
var client = new tinder.TinderClient();

var fb_userToken = 

client.authorize(
  fb_userToken,
  fb_ID,
  function() {
    client.getRecommendations(10, function(error, data){
      console.log(data.results);
    });
  }
);
