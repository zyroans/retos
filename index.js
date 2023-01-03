// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
const giftsCities = [12, 3, 11, 5, 7, 17];
const maxGifts = 20;
const maxCities = 3;

function getMaxGifts(giftsCities, maxGifts, maxCities) {
  let presentTotalWeight = giftsCities.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  if (maxCities <= 0 || maxGifts <= 0 || presentTotalWeight <= 0) {
    return 0;
  }
  if (maxCities === 1) {
    giftsCities.sort((a, b) => {
      return b - a;
    });
    return giftsCities.find((Element) => Element <= maxGifts);
  }
  if (maxCities === 2) {
  }
  if (maxCities === giftsCities.length && maxGifts >= presentTotalWeight) {
  }
  return;
}

console.log(getMaxGifts(giftsCities, maxGifts, maxCities));
