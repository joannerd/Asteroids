const Game = require('./game.js');

function GameView(ctx) {
  this.game = new Game();
  this.ctx = ctx;
  // let that = this;
  console.log(this); // `this` refers to the GameView instance we create 
  // () => this.start()     <-- takes `this` from surrounding scope
  setInterval(this.start.bind(this), 20); // 
}
// function setInterval(callback, interval) {};
// this is function-style
// inside this function scope, `this` loses it's original context and will be the window/global - unless it's an ES6 function

GameView.prototype.start = function() {
  this.game.draw(this.ctx);
  this.game.moveObjects();
  console.log(this);
};



module.exports = GameView;