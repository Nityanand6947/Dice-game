var randomNumber1 = Math.floor(Math.random() * 6)+1; // 1 - 6 

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice2.png

var randomImageSoure1 = "images/" + randomDiceImage;  // images/dice1.png - images/dice6.png 

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSoure1);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSoure2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSoure2);


/*
var randomNumber2 = Math.floor(Math.random() * 6)+1; // 1 - 6 

var randomDiceImage = "dice" + randomNumber2 + ".png"; //dice1.png - dice2.png

var randomImageSoure2 = "images/" + randomDiceImage;  // images/dice1.png - images/dice6.png 

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSoure2);
*/

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 win's";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 win's🚩";
}
else {
    document.querySelector("h1").innerHTML = "🚩Draw🚩";
}
