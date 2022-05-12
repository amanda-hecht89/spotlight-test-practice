export function renderPets(pets) {
    const div = document.createElement('div');
    div.classList.add('animal');

    const h1 = document.createElement('h1');
    h1.textContent = pets.name;

    const img = document.createElement('img');
    img.src = pets.image;

    const p = document.createElement('p');
    p.textContent = `${pets.name} is ${pets.age} and is a ${pets.breed}`;

    //const h2 = document.createElement('h2');
   // h2.textContent = 'species';

    const ul = document.createElement('ul');
    for (let species of pets.species) {
        const li = document.createElement('li');
        li.textContent = species;
        ul.append(li);
    }
    
    div.append(h1, img, p, ul);
    return div;


}
export function renderMascot(mascot) {
    const div = document.createElement('div');
    div.classList.add('mascot');

    const h1 = document.createElement('h1');
    h1.textContent = mascot.state;

    const img = document.createElement('img');
    img.src = mascot.image;

    const p = document.createElement('p');
    p.textContent = `${mascot.state} ${mascot.team} mascot is a ${mascot.animal}`;
    
    div.append(h1, img, p,);
    return div;
}

export function renderFruit(food) {
    const div = document.createElement('div');
    div.classList.add('food');

    const h1 = document.createElement('h1');
    h1.textContent = food.fruit;

    const img = document.createElement('img');
    img.src = food.image;

    const p = document.createElement('p');
    p.textContent = `${food.fruit} ia a ${food.color} ${food.type}`;
    
    div.append(h1, img, p,);
    return div;
}