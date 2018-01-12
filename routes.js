var express = require('express');
var router = express.Router();
var getArea = require('./area').getArea;

router
  .get('/getArea', function(req, res) {

    const side1 = req.query.side1
    const side2 = req.query.side2

    const area = getArea([side1, side2])

    if (area === -1) {
      res.status(400).json({
        "area": -1
      })
    } else {
      res.status(200).json({
        "area": area
      })
    }
  })

module.exports = router;