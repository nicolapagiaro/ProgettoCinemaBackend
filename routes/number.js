var express = require('express');
var router = express.Router();

/* GET numbers main page. */
router.get('/', function(req, res, next) {
    // genero il numero
    res.render('number_main');
});

router.get('/hardcoded', function(req, res, next) {
    // genero il numero
    let number = Math.floor(Math.random() * 100)

    res.render('number', { title: 'Numero random senza AJAX', n:number });
});

/**
 * Serve al client la pagina di template
 */
router.get('/api_call', function(req, res, next) {
    res.render('number', { title: 'Numero random con AJAX'});
});

/**
 * Chiamata API al server
 */
router.get('/api_generate', function(req, res, next) {
    // genero il numero
    let number = Math.floor(Math.random() * 100)

    // lo mando alla pagina come json
    res.send({ number : number });
});

module.exports = router;
