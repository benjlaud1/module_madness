
var random = require('./random');
var convert = require('./convert');

var output = {
  accountBalance: function () {
    // return 'server connected';
    return 'Account balance: \n' + convert.convertUSD(random.getRandomNumber(100, 1000000));
  }
};

module.exports = output;
