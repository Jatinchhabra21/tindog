import { Dog } from './Dog.js';
import { dogs } from './data.js';

const dogArray = dogs.map((element) => element.name);
let dog = getNextDog(dogArray);

document.getElementById('like-btn').addEventListener('click', likeDog);
document.getElementById('dislike-btn').addEventListener('click', dislikeDog);

function getNextDog(dogArray) {
  const nextDog = dogs.filter((dog) => dog.name === dogArray[0])[0];
  dogArray.shift();
  return nextDog ? new Dog(nextDog) : {};
}

function render() {
  document.getElementById('dog-detail').innerHTML = Object.keys(dog).length
    ? dog.getDogProfileHtml()
    : getNoMoreDogsAvailable();
}

function likeDog() {
  dog.hasBeenLiked = true;
  dog = getNextDog(dogArray);
  document.getElementById('like-badge').style.display = 'block';
  setTimeout(render, 350);
}

function dislikeDog() {
  dog.hasBeenSwipe;
  dog = getNextDog(dogArray);
  document.getElementById('dislike-badge').style.display = 'block';
  setTimeout(render, 350);
}

function getNoMoreDogsAvailable() {
  document.getElementById('dog-detail').style.background = 'white';
  document.querySelector('#dislike-btn button').disabled = true;
  document.querySelector('#like-btn button').disabled = true;
  return `<h2>No More dogs available in your area.</h2>`;
}

render();
