// IMPORT MODULES under test here:
// import { example } from '../example.js';
//import { pets } from '../pets.js';
import { pets } from '../pets.js';
import { football } from '../mascot.js';
import { food } from '../fruit.js';
import { renderFruit, renderMascot, renderPets } from '../utils.js';

const test = QUnit.test;

test('test pet render function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="animal"><h1>Arya</h1><img src="./assets/Arya.jpeg"><p>Arya is 7 and is a CoonHound</p><ul><li>Dog</li><li>Dog</li><li>Turtle</li><li>Fish</li></ul></div>`;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderPets(pets[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});




test('test mascot render function ', (expect) => {
    //Arrange
    //Set up your arguments and expectations
    const expected = `<div class="mascot"><h1>Michigan State</h1><img src="./assets/MSU.jpg"><p>Michigan State spartans mascot is a Spartan</p></div>`; 
  //Act 
  // Call the function you're testing and set the result to a const
    const actual = renderMascot(football[0]);

  //  Expect
   //  Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});




test('test food render function ', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="food"><h1>Banana</h1><img src="./assets/banana.png"><p>Banana ia a Yellow fruit</p></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderFruit(food[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});