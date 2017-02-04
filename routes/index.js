var express = require('express');
require('shelljs/global');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'PDF Downloader' });
});

router.get('/link/:user/:repo', function(req, res) {
  console.log(req.params.user, req.params.repo);
  exec("wget https://github.com/" + req.params.user + "/" + req.params.repo + "/archive/master.zip");
  exec("unzip master.zip")
  res.send(200);

});

module.exports = router;
