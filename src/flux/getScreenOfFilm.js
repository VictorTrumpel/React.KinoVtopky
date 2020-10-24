import {API_KEY} from "../Constants";

export function getScreenOfFilm(idOfFilm) {
    const responseFromApi = getResponseFromApi(idOfFilm);

    const arrayScreenOfFilm = responseFromApi.backdrops;

    return arrayScreenOfFilm;
}

function getUrlOfScreenOfFilm(idOfFilm) {
    return 'https://api.themoviedb.org/3/movie/'+idOfFilm+'/images?api_key='+API_KEY;
}

function getResponseFromApi(idOfFilm) {
    const url = getUrlOfScreenOfFilm(idOfFilm);
    let xhr = new XMLHttpRequest();
    let responseFromApi = {
        backdrops: []
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