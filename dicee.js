
var randomNumber1 = Math.floor(Math.random() * 6) + 1;// 1 - 6

var randomDiceImage = "dice" + randomNumber1 + ".png";// dice1.png - dice6.png

var randomSourceImage = "images/" + randomDiceImage;// images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomSourceImage);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomSourceImage = "images/dice" +  randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomSourceImage);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}

// alert("working");