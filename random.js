// creates a random number based on 'min' and 'max' values passed to it

/*
** changed output from an object to function to simplify the code
*/

function output (min, max) {
// var output = {
  // getRandomNumber: function (min, max) {
    return Math.random() * (1 + max - min) + min;
  }
// };
module.exports = output;
