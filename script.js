"use strict";

const cards = [
  "2", "3", "4", "5",
  "6", "7", "8", "9",
  "T", "J", "Q", "K", "A",
];

function getRandomArrayElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getCard() {
  return getRandomArrayElement(cards);
}

function getPoint(card, currentPoints = 0) {
  switch (card) {
    case "2":
      return 2;
    case "3":
      return 3;
    case "4":
      return 4;
    case "5":
      return 5;
    case "6":
      return 6;
    case "7":
      return 7;
    case "8":
      return 8;
    case "9":
      return 9;
    case "T":
    case "J":
    case "Q":
    case "K":
      return 10;
    case "A":
      if (currentPoints + 11 > 21) {
        return 1;
      }
      else  {
        return 11;
      }
  }

return points;
}

function sumPoints(cards, currentPoints = 0) {
  const cardPoints = [];

  for (let card of cards) {
    cardPoints.push(getPoint(card, currentPoints))
  }

  return cardPoints.reduce((sum, card) => sum + card, 0);
}

function checkLose(currentPoints) {
  return currentPoints > 21 ? true : false;
}

function blackJack() {

}