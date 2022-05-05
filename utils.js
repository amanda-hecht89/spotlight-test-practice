export function renderPets(pets) {
    const div = document.createElement('div');
    div.classList.add('pets');

    const h1 = document.createElement('h1');
    h1.textContent = pets.name;

    const img = document.createElement('img');
    img.src = pets.image;

    const p = document.createElement('p');
    p.textContent = `${pets.name} is ${pets.age} and is a ${pets.breed}`;

    const h2 = document.createElement('h2');
    h2.textContent = 'species';


    
    

}