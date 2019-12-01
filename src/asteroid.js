const Util = require('./util.js');
const MovingObject = require('./moving_object.js');

function Asteroid(options) {
  MovingObject.call(this, options);
  // this.pos = options.pos;
  this.vel = Util.randomVec(5);
  this.radius = 5;
  this.color = getRandomColor();
}
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


Util.inherits(Asteroid, MovingObject);
module.exports = Asteroid;