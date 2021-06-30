var express = require('express');
var router = express.Router();
const db = require('./db');
const my_request = require('./request');

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    let results = await db.all();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get('/client', async (req, res) => {
  try {
    let request = "SELECT * FROM client";
    res.setHeader('Access-Control-Allow-Origin', '*');

    /* Debug Request */
    console.log(request);

    /* Sended Results */
    let results = await db.specific(request);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get('/add_client', async (req, res) => {
  try {
    const nom_societe = req.query.nom_societe;
    const adresse_1 = req.query.adresse_1;
    const adresse_2 = req.query.adresse_2;
    const ville = req.query.ville;

    let request = `INSERT INTO client (nom_societe, adresse_1, adresse_2, ville) VALUES ('${nom_societe}', '${adresse_1}', '${adresse_2}', '${ville}')`
    console.log(request);

    let results = await db.specific(request);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = router;
