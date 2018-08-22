var hangman;


function Hangman() {
  this.words = ["lion","turtle","dolphin","rhinoceros","elephant","giraffe","gorilla","octopus","moose"];
  this.secretWord = "";
  this.letters = [];
  this.keyCode = [65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90];
  this.guessedLetter = "";
  this.errorsLeft = 11;
}

Hangman.prototype.getWord = function () {
  return this.secretWord = "";
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  console.log(keyCode)
  if (keyCode >= 65 && keyCode <= 90){
    return true
   }
   return false  
};

Hangman.prototype.checkClickedLetters = function (key) { //revisar charcode, indexOf, includes
  console.log(key)

};

// Hangman.prototype.addCorrectLetter = function (i) {

// };

// Hangman.prototype.addWrongLetter = function (letter) {

// };

// Hangman.prototype.checkGameOver = function () {

// };

// Hangman.prototype.checkWinner = function () {

// };

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
