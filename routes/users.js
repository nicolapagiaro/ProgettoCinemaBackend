var express = require('express');
var router = express.Router();

/* GET users list. */
router.get('/', function(req, res, next) {
  res.render('users')
});

/* GET per aggiungere un utente */
router.get('/add', function(req, res, next) {
    res.render('useradd')
});


module.exports = router;
