var express = require('express');
var router = express.Router();
//const OcurrenceModel = require('../models/ocurrence.model');
const request = require('request');


/* GET Data from GBIF/ */
router.get('/getwiki', async (req, res) => {
    request('http://api.gbif.org/v1/species/suggest?'+ req.query.name , function (error, response, body) {
        try {
            res.send(body);
          } catch (err) {
            res.status(500).send(err);
          }
    });

});

module.exports = router;
