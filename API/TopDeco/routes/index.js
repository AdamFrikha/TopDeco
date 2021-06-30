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
    // res.setHeader('Access-Control-Allow-Origin', '*');

    /* Debug Request */
    console.log(request);

    /* Sended Results */
    let results = await db.specific(request);
    console.log(results)
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = router;
