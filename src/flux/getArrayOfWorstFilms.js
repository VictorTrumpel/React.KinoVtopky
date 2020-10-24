import {API_KEY, SORT_BY, VOTE_COUNT_GTE, LENGTH_ARRAY_OF_WORST_FILMS, FIRST_PAGE_OF_RESPONSE} from "../Constants.js"

export function getArrayOfWorstFilms(releaseYear, typeOfContent) {
    const arrayOfResultsFromAPI = getResponseFromAPI(FIRST_PAGE_OF_RESPONSE, releaseYear, typeOfContent).results;

    let arrayOfWorstFilms = [];

    if (arrayOfResultsFromAPI.length > LENGTH_ARRAY_OF_WORST_FILMS) {
        arrayOfWorstFilms = arrayOfResultsFromAPI.slice(0,LENGTH_ARRAY_OF_WORST_FILMS);
    }
    if (arrayOfResultsFromAPI.length <= LENGTH_ARRAY_OF_WORST_FILMS) {
        arrayOfWorstFilms = arrayOfResultsFromAPI;
    }

    return arrayOfWorstFilms;
}

function getUrlOfAllFilmsOfThisYear(page, releaseYear, typeOfContent) {
    const urlForMovie = 'https://api.themoviedb.org/3/discover/movie?api_key='+API_KEY+'&language=en-US&sort_by='+SORT_BY+'&page='+page+'&primary_release_year='+releaseYear+'&vote_count.gte='+VOTE_COUNT_GTE;
    const urlForTV = 'https://api.themoviedb.org/3/discover/tv?api_key='+API_KEY+'&language=en-US&sort_by='+SORT_BY+'&first_air_date_year='+releaseYear+'&page='+page+'&vote_count.gte='+VOTE_COUNT_GTE+'&include_null_first_air_dates=false';

    if (typeOfContent === 'movie') return urlForMovie;
    if (typeOfContent === 'tv') return  urlForTV;
}

function getResponseFromAPI(page, releaseYear, typeOfContent) {
    if (typeof page !== "number") page = FIRST_PAGE_OF_RESPONSE;
    const url = getUrlOfAllFilmsOfThisYear(page, releaseYear, typeOfContent);

    let xhr = new XMLHttpRequest();
    let response = {results: []};
    xhr.open('GET', url, false);
    xhr.onload = function() {
        if (xhr.status === 200) {
            response = JSON.parse(xhr.response);
        }
    };
    xhr.send();
    return response;
}



