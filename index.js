var randomNum1 = Math.floor(1+Math.random()*6);
var string1 = "images/dice" + randomNum1 + ".png"

var randomNum2 = Math.floor(1+Math.random()*6);
var string2 = "images/dice" + randomNum2 + ".png";

document.querySelector(".img2").setAttribute("src",string1);
document.querySelector(".img1").setAttribute("src",string2);

if(randomNum1>randomNum2)
document.querySelector("h1").innerHTML = "Player 2 Wins!";
else if (randomNum1<randomNum2)
document.querySelector("h1").innerHTML = "Player 1 Wins!";
else
document.querySelector("h1").innerHTML = "Draw!";
