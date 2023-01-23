import { getDog } from '../fetch-utils.js';
import { renderDogDetail } from '../render-utils.js';

const dogDetailContainer = document.getElementById('dog-detail-container');

// on load
window.addEventListener('load', async () => {
    const data = new URLSearchParams(window.location.search);

    // get the id from URL
    const id = data.get('id');

    // use the id to fetch the dog
    const response = await getDog(id);

    // render and append this dog's details to the container
    const dogDetailEl = renderDogDetail(response);
    dogDetailContainer.append(dogDetailEl);
});
