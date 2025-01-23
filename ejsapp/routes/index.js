var express = require('express');
var router = express.Router();

/* GET home page. */
var path = require('path');
router.get("/:newUser", function (req, res, next) {
  res.render("index", { newUser: req.params.newUser });
});
router.use(express.static(path.join(__dirname, '..')));
router.get('/', function(req, res, next) {
  // res.sendFile(path.join(__dirname, '..', 'index.html'));
  res.render('index', { title: 'Express' });
});

module.exports = router;
