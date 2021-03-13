import * as UI from './interfaz.js';
import API from './api.js';

UI.formSearch.addEventListener('submit', songSearch);


function songSearch(e) {
    e.preventDefault();
    // get data from form
    const artist = document.querySelector('#artista').value;
    const song = document.querySelector('#cancion').value;

    if (artist === '' || song === '') {
        UI.messageError.textContent = 'Ups... todos los campos son obligatorios';
        UI.messageError.classList.add('error');

        setTimeout(() => {
            UI.messageError.textContent = '';
            UI.messageError.classList.remove('error');
        }, 3000);

        return;
    }



    const searchLyrics = new API(artist, song);
    searchLyrics.resultAPI();
}


