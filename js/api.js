import * as UI from './interfaz.js';

class API {
    constructor(artist, song) {
        this.artist = artist;
        this.song = song;

    }
    resultAPI() {
        const url = `https://api.lyrics.ovh/v1/${this.artist}/${this.song}`

        Spinner();

        fetch(url)
            .then(response => response.json())
            .then(result => {
                if (result.lyrics) {
                    const { lyrics } = result;
                    UI.lyricsResult.textContent = lyrics;
                    UI.headingResult.textContent = `Letra de la canción: ${this.song} de ${this.artist}`;
                } else {
                    UI.messageError.innerHTML = 'No encontre lo que buscabas  ☹';
                    UI.messageError.classList.add('error');
                }
                setTimeout(() => {
                    UI.messageError.innerHTML = '';
                    UI.messageError.classList.remove('error');
                    UI.formSearch.reset();
                }, 3000)

            })
    }
}
function Spinner() {
    const spinnerContainer = document.createElement('div');
    spinnerContainer.classList.add('sk-fading-circle');
    spinnerContainer.innerHTML = `
    
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
    
    
    `;
    UI.lyricsResult.appendChild(spinnerContainer);
}

export default API;


