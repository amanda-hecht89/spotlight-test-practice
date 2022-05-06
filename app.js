// import functions and grab DOM elements
// let state
import { pets } from './pets.js';
import { renderPets } from './utils.js';
import { football } from './mascot.js';
import { renderMascot } from './utils.js';
import { food } from './fruit.js';
import { renderFruit } from './utils.js';


const petsEl = document.getElementById('pets');
const mascotEl = document.getElementById('sports');
const fruitEl = document.getElementById('food');

for (let pet of pets) {
    const petsdiv = renderPets(pet);
    petsEl.append(petsdiv);

}

for (let mascot of football) {
    const mascotdiv = renderMascot(mascot);
    mascotEl.append(mascotdiv);
}

for (let fruit of food) {
    const fruitdiv = renderFruit(fruit);
    fruitEl.append(fruitdiv);
}
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
