// converts a given number to USD amount
var output = {
  convertUSD: function (number) {
    number = number.toFixed(2);
    return '$' + parseFloat(number).toLocaleString();
  }
};

module.exports = output;
