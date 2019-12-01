const Asteroid = require("./asteroid.js");
const MovingObject = require("./moving_object.js");

function Game(asteroids=[]) {
  this.asteroids = asteroids;
  let count = this.asteroids.length;
  while (this.asteroids.length < Game.NUM_ASTEROIDS) {
   this.addAsteroids();
  }
}
Game.DIM_X = 1900;
Game.DIM_Y = 980;
Game.NUM_ASTEROIDS = 50;

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);

  var grd = ctx.createLinearGradient(0, 0, 1900, 980);
  grd.addColorStop(0, "#000060");
  grd.addColorStop(1, "white");
  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, 1900, 980);

  const circle = document.getElementById("game-canvas");
  const moon = new MovingObject({
    pos: [150, 150],
    vel: [10, 10],
    radius: 90,
    color: "#FFFFCC"
  });
  moon.draw(ctx);

  const sun = new MovingObject({
    pos: [1900, 980],
    vel: [10, 10],
    radius: 500,
    color: "yellow"
  });
  sun.draw(ctx);



  this.asteroids.forEach(a => {
    a.draw(ctx);
  });
};

Game.prototype.moveObjects = function() {
  this.asteroids.forEach(a => {
    a.move();
  });
};

Game.prototype.addAsteroids = function(){
  let a = new Asteroid(this.randomPosition());
  this.asteroids.push(a);
};

Game.prototype.randomPosition = function(){
  let hash = {};
  // hash['pos'] = [];
  let x = Math.floor(Math.random()* 1900);
  let y = Math.floor(Math.random()* 980);
  hash.pos = [x, y];
  console.log(hash);
  return hash;
};

module.exports = Game;