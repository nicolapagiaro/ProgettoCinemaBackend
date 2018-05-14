const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const fs = require('fs');

const FILE_NAME = "users.csv";
const LINE_SEPARATOR = '\r\n';
const ENCODING = 'utf-8';

/* API post adduser per aggiungere un Utente  */
router.post('/users', function(req, res, next) {
    // string in formato CSV dell'oggetto
    let row = Object.values(req.body).join()

    // lo appendo al file
    fs.appendFile(FILE_NAME, row + LINE_SEPARATOR, (err) => {
        if(err) throw  err.toString();

        console.log("row added");
    })

    // reindirizza
    res.redirect("/users");
});

/* API get per vedere la losta degli utente */
router.get('/users', function (req, res, next) {
    let users = [];

    // leggo il file ed aggiungo gli utenti ad un array
    fs.readFile(FILE_NAME, ENCODING, (err, content) => {
        if(err) return;

        // prendo le righe
        let rows = content.split(LINE_SEPARATOR);

        // per ogni riga mi prendo l'user
        rows.forEach((row) => {
            let elements = row.split(",");

            if(elements.length === 3) {
                let user = {
                    nome: elements[0],
                    email: elements[1],
                    song: elements[2]
                }

                users.push(user);
            }
        })

        // lo restituisco alla pagina
        res.json({users: users});
    })
})

router.get('/erase', function (req, res, next) {
    fs.unlink(FILE_NAME, (err) => {
        if(err) throw err;

        console.log("Tutto cancellato");
    })

    res.redirect("/users");
})

module.exports = router;