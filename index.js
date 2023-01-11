// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
const giftsCities = [12, 3, 11, 5, 7, 17];
const maxGifts = 20;
const maxCities = 3;
const results = document.createElement('div');
appDiv.appendChild(results);
results.innerHTML = createCube(3);

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

function createCube(size) {
  const newCube = [];
  const numberOfLines = size * 2;
  const topSide = '\\_';
  const bottonSide = '_/';
  const leftSide = '\\/';
  const blankSpace = '&nbsp';
  for (let i = 1; i <= numberOfLines; i++) {
    if (i <= numberOfLines / 2) {
      newCube.push(
        blankSpace.repeat(numberOfLines / 2 - i) +
          '/' +
          leftSide.repeat(i - 1) +
          topSide.repeat(size) +
          '\\' +
          '<br>'
      );
    }
    if (i > numberOfLines / 2) {
      console.log('paso la mitad ' + i);
      newCube.push(
        blankSpace.repeat(i - 1 - numberOfLines / 2) +
          leftSide.repeat(numberOfLines - (i - 1)) +
          bottonSide.repeat(size) +
          '<br>'
      );
    }
  }

  return newCube.join('');
}
console.log(createCube(2));
