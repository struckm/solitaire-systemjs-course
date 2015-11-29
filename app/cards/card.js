import './images/1.png!image';
import './images/2.png!image';
import './images/3.png!image';
import './images/4.png!image';
import './images/5.png!image';
import './images/6.png!image';
import './images/7.png!image';
import './images/8.png!image';
import './images/9.png!image';
import './images/10.png!image';

export default function Card(card) {
  this.suit = card.suit;
  this.rank = card.rank;
  this.image = (Card.ranksInImagesOrder.indexOf(this.rank) * 4 + Card.suitsInImagesOrder.indexOf(this.suit) + 1) + ".png";
  this.color = card.suit === "Spades" || card.suit === "Clubs" ? "black" : "red";
  this.turnedUp = false;
}

Card.ranksInImagesOrder = ["Ace", "King", "Queen", "Jack", "10", "9", "8", "7", "6", "5", "4", "3", "2"];
Card.suitsInImagesOrder = ["Clubs", "Spades", "Hearts", "Diamonds"];

Card.prototype.turnUp = function () {
  this.turnedUp = true;
};
Card.prototype.turnDown = function () {
  this.turnedUp = false;
};