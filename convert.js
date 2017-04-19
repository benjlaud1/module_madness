// converts a given number to USD amount

/*
** changed output from an object to function to simplify the code
*/

function output (number) {
// var output = {
  // convertUSD: function (number) {
    number = number.toFixed(2);
    return '$' + parseFloat(number).toLocaleString();
  }
// };

module.exports = output;
