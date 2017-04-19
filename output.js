
var random = require('./random');
var convert = require('./convert');

/*
** changed output from an object to function to simplify the code
*/

function output () {
// var output = {
  // accountBalance: function () {
    // return 'server connected';
    return 'Account balance: \n' + convert(random(100, 1000000)); // .getRandomNumber .convertUSD
  }
// };

module.exports = output;
