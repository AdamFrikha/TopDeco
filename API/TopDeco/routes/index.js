var express = require('express');
var router = express.Router();
const db = require('./db');
const buy_db = require('./buy_db');
const my_request = require('./request');

/* GET home page. */
router.get('/', async (req, res, next) => {

  try {
    let results = await db.all();
    results += await buy_db.all();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }

});

router.get('/buy', async (req, res) => {
  try {
    const conditions = [];
    const values = [];
    let request = "SELECT * FROM ad_infos ";
    let Num_of_clauses = 0;

    /* making price request */
    if (req.query.PriceMin && req.query.PriceMax) {
      request = my_request.price(request);
      values.push(req.query.PriceMin);
      values.push(req.query.PriceMax);
      Num_of_clauses++;
    }

    /* making location request */
    if (req.query.Location) {
      request = my_request.location(request, Num_of_clauses);
      values.push(req.query.Location);
      Num_of_clauses++;
    }

    /* making type request */
    if (req.query.Type) {
      request = my_request.type(request, Num_of_clauses);
      values.push(req.query.Type);
      Num_of_clauses++;
    }

    /* Debug Request */
    console.log(request);

    /* Sended Results */
    let results = await buy_db.specific(request, values);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get('/rent', async (req, res) => {
  try {
    const conditions = [];
    const values = [];
    let request = "SELECT * FROM ad_infos ";
    let Num_of_clauses = 0;

    /* making price request */
    if (req.query.PriceMin && req.query.PriceMax) {
      request = my_request.price(request);
      values.push(req.query.PriceMin);
      values.push(req.query.PriceMax);
      Num_of_clauses++;
    }

    /* making location request */
    if (req.query.Location) {
      request = my_request.location(request, Num_of_clauses);
      values.push(req.query.Location);
      Num_of_clauses++;
    }

    /* making type request */
    if (req.query.Type) {
      request = my_request.type(request, Num_of_clauses);
      values.push(req.query.Type);
      Num_of_clauses++;
    }

    /* Debug Request */
    console.log(request);

    /* Sended Results */
    let results = await db.specific(request, values);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = router;
