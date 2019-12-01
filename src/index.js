console.log('Hello!');
const MovingObject = require("./moving_object.js");
const Util = require('./util.js');
const Asteroid = require("./asteroid.js");
const Game = require("./game.js");
const GameView = require("./game_view.js");

window.MovingObject = MovingObject;
window.Util = Util;
window.Asteroid = Asteroid;
window.Game = Game;
window.GameView = GameView;

// window.MovingObject.draw = MovingObject.draw;
const circle = document.getElementById("game-canvas");

window.addEventListener('DOMContentLoaded', (event) => {
  let ctx = circle.getContext("2d");


  // const mo = new MovingObject({
  //   pos: [150, 150],
  //   vel: [10, 10],
  //   radius: 90,
  //   color: "#FFFFCC"
  // });
  // mo.draw(ctx);


  const view = new GameView(ctx);
  // view.start();
  // const ma = new Asteroid({ pos: [150, 40] });
  // ma.draw(ctx);


});


// Qs:
// - how do we get our index.js to draw without settings up our obj in eventListener
// - Why can we not use Object.create(parent) in our inherits function?
//
