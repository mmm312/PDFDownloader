var express = require('express');
require('shelljs/global');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'PDF Downloader' });
});

router.get('/link/:user/:repo', function(req, res) {
  console.log(req.params.user, req.params.repo);
  res.send(200);
  if (exec("echo hello") !== 0) {
    exit(1);
  }
});

module.exports = router;
