"use strict"

const search = document.querySelector('#search');
let btn = document.querySelector('#btn');
const hr = document.querySelectorAll('hr')
const filmName = document.querySelector('#name');
const info = document.querySelector('#info');
const imdb = document.querySelector('#imdb');
const filmLength = document.querySelector('#length');
const dir = document.querySelector('#director');
const rDate = document.querySelector('#rDate');
const genre = document.querySelector('#genre');
const actors = document.querySelector('#actors');
const descr = document.querySelector('#descr');
const lang = document.querySelector('#lang');
const awards = document.querySelector('#awards');
const poster = document.querySelector('#post');
const form = document.querySelector('form');
const alert = document.querySelector('#alert');
const alert2 = document.querySelector('#alert2');
const article = document.querySelector('article');
const container = document.querySelector('.container')
alert.style.display = "none";
alert2.style.display = "none";
container.style.display = "none";

btn.addEventListener('click', searchas)

form.onsubmit = function(e) {
    if (search.value !== '') {
        e.preventDefault();
        alert.style.display = "none";
        article.style.display = "block"
    }
    else {
        e.preventDefault();
        alert.style.display = "block"
        article.style.display = "none"
    }
}

function searchas() {
    const fetchFilms = async () => {
        film = await fetch (
            "https://www.omdbapi.com/?apikey=e4db3ced&t="+search.value+""
        ).then(res => res.json());
    }
        var film;
        const filmSearch = async () => {
            await fetchFilms();
    container.style.display = "block";

    class Film {
        constructor(title, poster, rDate, genre, actors, descr, lang, awards, imdb, filmLength, dir) {
            this.title = title
            this.poster = poster
            this.rDate = rDate
            this.genre = genre
            this.actors = actors
            this.descr = descr
            this.lang = lang
            this.awards = awards
            this.imdb = imdb
            this.filmLength = filmLength
            this.dir = dir
        }
        output() {
            filmName.textContent = (this.title);
            poster.style.display = "block";
            poster.src = this.poster;
            rDate.textContent = (`Release Date: ${this.rDate}`);
            genre.textContent = (`Genre: ${this.genre}`);
            actors.textContent = (`Actors: ${this.actors}`);
            descr.textContent = (`Film Description: ${this.descr}`);
            lang.textContent = (`Language: ${this.lang}`);
            awards.textContent = (`Awards: ${this.awards}`);
            imdb.textContent = (`IMDB: ${this.imdb}`);
            filmLength.textContent = (`Length: ${this.filmLength}`)
            dir.textContent = (`Director: ${this.dir}`)
        }
    }
    
    if (film.Error == "Movie not found!") {
        alert2.style.display = "block"
        article.style.display = "none"
    }
    else if (film.Error == "Something went wrong.") {
        alert.style.display = "block"
        article.style.display = "none"
    }
    else {
        let filmFound = new Film(film.Title, film.Poster, film.Released, film.Genre, film.Actors, film.Plot, film.Language, film.Awards, film.imdbRating, film.Runtime, film.Director)
        filmFound.output()
    }
         
        }
        
        filmSearch()
    }
    const body = document.querySelector('body')
    const header = document.querySelector('header')
    const darkB = document.querySelector("#dark")
    const lightB = document.querySelector("#light")
    const i = document.querySelector('i')
    lightB.style.display = "none"
        darkB.addEventListener('click', darkMode)
    
        function darkMode() {
            body.style.background = "#0c1627"
            header.style.background = "#162541"
            container.style.background = "#243961"
            container.style.color = "#fff"
            i.style.color = "#fff"
            lightB.style.display = "block"
            darkB.style.display = "none"
        }
        lightB.addEventListener('click', lightMode)
        
            function lightMode() {
                body.style.background = "#355E9C"
                header.style.background = "rgba(101, 111, 202, 0.5)"
                container.style.background = "#fff"
                container.style.color = "#000"
                i.style.color = "#000"
                lightB.style.display = "none"
                darkB.style.display = "block"
            }

    

