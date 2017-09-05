var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.get('/', function(req, res, next) {
 const tags = req.query.tags;
 request({
    uri: 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=true&tags='+tags
  }).pipe(res);
});

module.exports = router;
