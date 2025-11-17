"use strict";

console.log("FIXED VERSION");

// fixed version block
{
    var score = 50;          
    let status = "ready";
    console.log(score);    
    function announce() {
        console.log("Game started");
    }
  function startGame() {
        console.log(status);
    }
    announce();
    startGame();
}

console.log("\nARROW FUNCTION VERSION");

// arrow function block
{
    let score2 = 50;   // use different names
    let status2 = "ready";
    const announce2 = () => {
        console.log("Game started");
    };
    const startGame2 = () => {
        console.log(status2);
    };
    console.log(score2);
    announce2();
    startGame2();
}
