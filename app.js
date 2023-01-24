import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');

// state
let dogsStateArray = [];

// on load
window.addEventListener('load', async () => {
    const response = await getDogs();
    // fetch all dogs
    dogsStateArray = response.data;
    // render and append all dog cards to the container
    for (let dog of dogsStateArray) {
        const newDogEl = renderDogCard(dog);
        dogListContainer.append(newDogEl);
    }
});
