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
    console.log(client.getDefaults());
  }
);
 

 //switch npm package to: https://www.npmjs.com/package/tinder-api-super ??