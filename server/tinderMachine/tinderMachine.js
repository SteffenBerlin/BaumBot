require keys from './config/apikeys.js';

var fb_userToken = keys.fb_userToken;
var fb_ID = keys.fb_ID;

var tinder = require('tinderjs');
var client = new tinder.TinderClient();

var fb_userToken = 

client.authorize(
  <fb user token>,
  <fb user id>,
  function() {
    client.getRecommendations(10, function(error, data){
      console.log(data.results);
    });
  });
});