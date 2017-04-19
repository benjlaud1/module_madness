// creates a random number based on 'min' and 'max' values passed to it
var output = {
  getRandomNumber: function (min, max) {
    return Math.random() * (1 + max - min) + min;
  }
};
module.exports = output;
