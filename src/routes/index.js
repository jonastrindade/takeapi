const express = require('express');
const router = express.Router();
const data = require('../data/takeData.json')

router.get('/', function (req, res, next) {
    res.status(200).send({
        data
    });
});

module.exports = router;