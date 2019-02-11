/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      console.log(input);
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input, initNum);
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      
      //res.json
      res.json({initNum: parseFloat(initNum), initUnit: initUnit, returnNum: parseFloat(returnNum.toFixed(5)), returnUnit: returnUnit, string: toString});
    });
    
};
