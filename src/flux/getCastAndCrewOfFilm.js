import {API_KEY, COUNT_OF_CREW_OF_FILM, COUNT_OF_PERSON_OF_MAIN_CAST} from "../Constants";

export function getCastAndCrewOfFilm(idOfFilm) {
    const responseFromApi = getResponseCastFomAp(idOfFilm);

    const arrayCastFromApi = responseFromApi.cast;
    const arrayCrewFromApi = responseFromApi.crew;

    let mainCastOfFilm = [];
    let mainCrewOfFilm = [];

    if(arrayCastFromApi.length >= COUNT_OF_PERSON_OF_MAIN_CAST) {
        mainCastOfFilm = arrayCastFromApi.slice(0, COUNT_OF_PERSON_OF_MAIN_CAST)
    }

    if (arrayCastFromApi.length < COUNT_OF_PERSON_OF_MAIN_CAST) {
        mainCastOfFilm = arrayCastFromApi;
    }

    if (arrayCrewFromApi.length >= COUNT_OF_CREW_OF_FILM) {
        mainCrewOfFilm = arrayCrewFromApi.slice(0, COUNT_OF_CREW_OF_FILM);
    }

    if (arrayCrewFromApi.length < COUNT_OF_CREW_OF_FILM) {
        mainCrewOfFilm = arrayCrewFromApi;
    }

    return {mainCastOfFilm, mainCrewOfFilm};
}

function getUrlOfCatOfFilm(idOfFilm) {
    return 'https://api.themoviedb.org/3/movie/'+idOfFilm+'/credits?api_key='+API_KEY;
}

function getResponseCastFomAp(idOfFilm) {
    const url = getUrlOfCatOfFilm(idOfFilm);
    let xhr = new XMLHttpRequest();
    let responseFromApi = {
        cast: [],
        crew: []
    };
    xhr.open('GET', url, false);
    xhr.onload = function () {
        if (xhr.status === 200) {
            responseFromApi = JSON.parse(xhr.response);
        }
    };
    xhr.send();
    return responseFromApi;
}