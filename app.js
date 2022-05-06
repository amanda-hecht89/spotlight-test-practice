// import functions and grab DOM elements
// let state
import { pets } from './pets.js';
import { renderPets } from './utils.js';
import { team } from './mascot.js';


const petsEl = document.getElementById('pets');

for (let pet of pets) {
    const petsdiv = renderPets(pet);
    petsEl.append(petsdiv);

}
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
