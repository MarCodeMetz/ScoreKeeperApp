var P1 = document.querySelector("#Player1");
var P2 = document.querySelector("#Player2");
var P1Display = document.querySelector("#P1Display");
var P2Display = document.querySelector("#P2Display");
var numberInput = document.querySelector("input");
var value = document.getElementById("value");
var P1score = 0;
var P2score = 0;
var gameOver = false;
var winningScore = document.getElementById("value");
var resetButton = document.getElementById("Reset");

P1.addEventListener("click", function () {
    if (!gameOver) {
        P1score++;
        if (P1score === winningScore) {
            P1Display.classList.add("winner");
            gameOver = true;
            alert("GAME OVER - PLAYER 1 WON!!!");
        }
        P1Display.textContent = P1score;
    }
});

P2.addEventListener("click", function () {
    if (!gameOver) {
        P2score++;
        if (P2score === winningScore) {
            P2Display.classList.add("winner");
            gameOver = true;
            alert("GAME OVER - PLAYER 2 WON!!!");
        }
        P2Display.textContent = P2score;
    }
});

resetButton.addEventListener("click", function () {
   reset();
});


//this function resets the score, if you change "Playing to" or hit the "Reset" Button
function reset(){
    P1score = 0;
    P2score = 0;
    P1Display.textContent = 0;
    P2Display.textContent = 0;
    P1Display.classList.remove("winner");
    P2Display.classList.remove("winner");
    gameOver = false;
};

//this function changes the number of Playing to
numberInput.addEventListener("change", function(){
      value.textContent = this.value;
      winningScore = Number(this.value);
      reset();
});