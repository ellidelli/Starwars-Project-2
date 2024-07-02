//author:Ridwan Abdi
//adapted from character.js
//Date:6/25/24

let title1;
let filmChar;
let filmPl;

const baseUrl = `https://swapi2.azurewebsites.net/api`;

//load page
addEventListener('DOMContentLoaded', () => {
    title1 = document.querySelector('h1#title');
    filmChar = document.querySelector('#characters>ul');
    filmPl = document.querySelector('#planets>ul');
    
    // Read film id from the querystring
    const sp = new URLSearchParams(window.location.search);
    const id = sp.get('id');
    getFilm(id);
});

//async wait - awaits until promise is resolved
async function getFilm(id) {
    try {
      const film = await fetchFilm(id);
      const characters = await fetchCharacters(id);
      const planets = await fetchPlanets(id);
      renderFilm(film, characters, planets);
    } catch (ex) {
      console.error(`Error reading film ${id} data.`, ex.message);
    }
}

//we fetch the films information 
async function fetchFilm(id) {
    const url = `${baseUrl}/films/${id}`;
    return await fetch(url).then(res => res.json());
}

// we fetch the planets in the film
async function fetchPlanets(id) {
    const url = `${baseUrl}/films/${id}/planets`;
    return await fetch(url).then(res => res.json());
}

//we fetch the characters in the film
async function fetchCharacters(id) {
    const url = `${baseUrl}/films/${id}/characters`;
    return await fetch(url).then(res => res.json());
}

// Display characters and planets in the browser
const renderFilm = (film, characters, planets) => {
    document.title = `SWAPI - ${film.title}`;
    title1.textContent = film.title;

    const charactersLis = characters.map(character => `<li><a href="/character.html?id=${character.id}">${character.name}</a></li>`);
    filmChar.innerHTML = charactersLis.join("");

    const planetsLis = planets.map(planet => `<li><a href="/planet.html?id=${planet.id}">${planet.name}</a></li>`);
    filmPl.innerHTML = planetsLis.join("");
};