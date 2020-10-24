import {
    CHANGE_DISPLAY_VALUE_OF_INF_BLOCK,
    CHANGE_TEXT_OF_BUTTON_MORE_INF_BUTTON,
    GET_MAIN_CAST_AND_CREW_OF_FILM,
    GET_SCREEN_OF_FILM,
    GET_WORST_FILMS
} from "./types";

export function getWorstFilms(infAboutContent) {
    return {
        type: GET_WORST_FILMS,
        payload: infAboutContent
    }
}

export function getMainCastAndCrewOfFilm(idOfFilm) {
    return {
        type: GET_MAIN_CAST_AND_CREW_OF_FILM,
        payload: idOfFilm
    }
}

export function getScreenOfFilm(idOfFilm) {
    return {
        type: GET_SCREEN_OF_FILM,
        payload: idOfFilm
    }
}

export function changeTextOfMoreInfButton(buttonAndText) {
    return {
        type: CHANGE_TEXT_OF_BUTTON_MORE_INF_BUTTON,
        payload: buttonAndText
    }
}

export function changeDisplayValueOfInfBlock(idAdnDisplayValueBlock) {
    return {
        type: CHANGE_DISPLAY_VALUE_OF_INF_BLOCK,
        payload: idAdnDisplayValueBlock
    }
}