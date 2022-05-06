// import functions and grab DOM elements
// let state
import { pets } from './pets.js';
import { renderPets } from './utils.js';
import { football } from './mascot.js';
import { renderMascot } from './utils.js';


const petsEl = document.getElementById('pets');
const mascotEl = document.getElementById('mascot');

for (let pet of pets) {
    const petsdiv = renderPets(pet);
    petsEl.append(petsdiv);

}

for (let mascot of mascot) {
    const mascotdiv = renderMascot(football);
    mascotEl.append = (mascotdiv);
}
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
