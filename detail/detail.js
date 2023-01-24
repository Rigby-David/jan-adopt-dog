import { getDog } from '../fetch-utils.js';
import { renderDogDetail } from '../render-utils.js';

const dogDetailContainer = document.getElementById('dog-detail-container');

//state
let dogByIdState = [];
// on load
window.addEventListener('load', async () => {
    const data = new URLSearchParams(window.location.search);
    console.log('data', data);
    // get the id from URL
    const id = data.get('yo');

    // use the id to fetch the dog
    const response = await getDog(id);

    dogByIdState = response.data;
    console.log('dogByIdState', dogByIdState);
    // render and append this dog's details to the container
    const dogDetailEl = renderDogDetail(dogByIdState);
    dogDetailContainer.append(dogDetailEl);
});
