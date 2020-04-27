
console.log("Up and running!");

var cardOne = "queen"
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
console.log("User flipped" + cardOne);
console.log("User flipped" + cardThree);


var cards=["queen", "queen", "king", "king"];

var cardsInPlay=[];

var flipCard=function(cardId) {
    let cardId = this.getAttribute("data-id");
    cardsInPlay.push(cards[cardId]);
    this.setAttribute("src", cards[cardId].cardImage);
    checkForMatch();
   };

   var createBoard=function() {
    for (let i = 0; i < cards.length; i++) {
        let cardElement = document.createElement("img");
        cardElement.setAttribute("src", "images/back.png");
        cardElement.setAttribute("data-id", i);
        cardElement.addEventListener("click", flipCard);
        document.getElementById("game-board").appendChild(cardElement);
    };
    createBoard();
}

var checkForMatch=function() {
    if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
        alert("You found a match!");
    } else {
        alert("Sorry, try again");
    }
}
if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
  } else {
    console.log("Sorry, try again.");
  }

createBoard();


var cardOne=[0];
cardsInPlay.push('cardOne');

console.log("User flipped " + cardOne);

var cardTwo=cards[1];
cardsInPlay.push('cardTwo');

console.log("User flipped " + cardTwo);

var cardThree = cards[2];
cardsInPlay.push(cardThree);
console.log("User flipped " + cardThree);

var cardFour = cards[3];
cardsInPlay.push(cardFour);
console.log("User flipped " + cardFour);
