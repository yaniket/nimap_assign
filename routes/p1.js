var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send("p1");
});

/* Dummy Book API */
router.get('/books', function(req, res, next) {
  res.json([
    { id: 1, title: 'Book One', author: 'Author One' },
    { id: 2, title: 'Book Two', author: 'Author Two' }
  ]);
});

module.exports = router;
