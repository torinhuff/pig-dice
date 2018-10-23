// // biz logic
// var player1 = new Player(Math.floor(Math.random() * 6) + 1);
var player1 = new Player();
var player2 = "";
// var rollRandom = Math.floor(Math.random() * 6) + 1;
var rollDice = 0;
var p1Score = 0;
var score = 0;

function Player(roll){
 this.roll = roll;
};

console.log(player1.roll);

Player.prototype.addRandom = function(){
  return this + score;
};


//
// // console.log(player1.roll);
//
//
// user logic
$(document).ready(function() {
  $("#rollButton").click(function() {
    event.preventDefault();
    rollDice = Math.floor(Math.random() * 6) + 1;
    score += rollDice;
    console.log(player1.addRandom());
})
});
