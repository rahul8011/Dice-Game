var diceNumPlayer1 = Math.floor(Math.random() * 6) + 1;
var diceNumPlayer2 = Math.floor(Math.random() * 6) + 1;

// ! Player 1
if(diceNumPlayer1 === 1)
    document.querySelector("img").setAttribute("src", "./assets/images/dice1.png");
else if(diceNumPlayer1 === 2)
    document.querySelector("img").setAttribute("src", "./assets/images/dice2.png");
else if(diceNumPlayer1 === 3)
    document.querySelector("img").setAttribute("src", "./assets/images/dice3.png");
else if(diceNumPlayer1 === 4)
    document.querySelector("img").setAttribute("src", "./assets/images/dice4.png");
else if(diceNumPlayer1 === 5)
    document.querySelector("img").setAttribute("src", "./assets/images/dice5.png");
else
    document.querySelector("img").setAttribute("src", "./assets/images/dice6.png");


// ! Player 2
if(diceNumPlayer2 === 1)
    document.querySelectorAll("img")[1].setAttribute("src", "./assets/images/dice1.png");
else if(diceNumPlayer2 === 2)
    document.querySelectorAll("img")[1].setAttribute("src", "./assets/images/dice2.png");
else if(diceNumPlayer2 === 3)
    document.querySelectorAll("img")[1].setAttribute("src", "./assets/images/dice3.png");
else if(diceNumPlayer2 === 4)
    document.querySelectorAll("img")[1].setAttribute("src", "./assets/images/dice4.png");
else if(diceNumPlayer2 === 5)
    document.querySelectorAll("img")[1].setAttribute("src", "./assets/images/dice5.png");
else
    document.querySelectorAll("img")[1].setAttribute("src", "./assets/images/dice6.png");


if(diceNumPlayer2 > diceNumPlayer1) {
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
} 
else if(diceNumPlayer1 === diceNumPlayer2) {
    document.querySelector("h1").textContent = "Draw!"
}