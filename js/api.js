import * as UI from './interfaz.js';

class API {
    constructor(artist, song) {
        this.artist = artist;
        this.song = song;

    }
    resultAPI() {
        const url = `https://api.lyrics.ovh/v1/${this.artist}/${this.song}`

        fetch(url)
            .then(response => response.json())
            .then(result => {
                if (result.lyrics) {
                    const { lyrics } = result;
                    UI.lyricsResult.textContent = lyrics;
                    UI.headingResult.textContent = `Letra de la canción: ${this.song} de ${this.artist}`;
                } else {
                    UI.messageError.textContent = ` No encontre lo que buscabas  ☹`;
                    UI.messageError.classList.add('error');
                }

            })
    }
}

export default API;