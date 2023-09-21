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

