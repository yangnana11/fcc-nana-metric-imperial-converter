/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {    
    var result = input.match(/\d|\./g).join("");
    return result;
  };
  
  this.getUnit = function(input, num) {
    var result = input.replace(num,"");
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    switch (initUnit) {
      case 'gal':
        result = "l";        
        break;
      case 'lbs':
        result = "kg";
        break;
      case 'mi':
        result = "km";
        break;
      default:
        result = initUnit;
    }    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    switch (initUnit) {
      case 'gal':
        result = initNum * galToL;        
        break;
      case 'lbs':
        result = initNum * lbsToKg;        
        break;
      case 'mi':
        result = initNum * miToKm;        
        break;
      default:
        result = initNum;
    }    
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = initNum;
    switch (initUnit) {
      case 'gal':
        result += " gallons converts to " + parseFloat(returnNum.toFixed(5)) + " litres";
        break;
      case 'lbs':
        result += " pounds converts to " + parseFloat(returnNum.toFixed(5)) + " kilograms";
        break;
      case 'mi':
        result += " miles converts to " + parseFloat(returnNum.toFixed(5)) + " kilometers";
        break;
      default:
        result += " " + initUnit + " converts to " + parseFloat(returnNum.toFixed(5)) + " " + returnUnit;
    }
    
    return result;
  };
  
}

module.exports = ConvertHandler;
