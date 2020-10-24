import {
    CHANGE_DISPLAY_VALUE_OF_INF_BLOCK,
    CHANGE_TEXT_OF_BUTTON_MORE_INF_BUTTON,
    GET_MAIN_CAST_AND_CREW_OF_FILM,
    GET_SCREEN_OF_FILM,
    GET_WORST_FILMS
} from "./types";
import {getArrayOfWorstFilms} from "./getArrayOfWorstFilms";
import {getCastAndCrewOfFilm} from "./getCastAndCrewOfFilm";
import {getScreenOfFilm} from "./getScreenOfFilm";
import {changeTextOfMoreInfButton} from "./changeTextOfMoreInfButton";
import {changeDisplayValueOfInfBlock} from "./changeDisplayValueOfInfBlock";

export function reducer(action, state) {
    switch (action.type) {
        case GET_WORST_FILMS :
            const {releaseYear, typeOfContent} = action.payload;
            let arrayOfWorstFilms = getArrayOfWorstFilms(releaseYear, typeOfContent);
            return {
                ...state,
                arrayOfWorstFilms
            };

        case GET_MAIN_CAST_AND_CREW_OF_FILM :
            const idOfFilmForCastAndCrew = action.payload;
            const {mainCastOfFilm, mainCrewOfFilm} = getCastAndCrewOfFilm(idOfFilmForCastAndCrew);
            return {
                ...state,
                castOfFilm: mainCastOfFilm,
                crewOfFilm: mainCrewOfFilm
            };

        case GET_SCREEN_OF_FILM :
            const  idOfFilmForScreen = action.payload;
            const screenOfFilm = getScreenOfFilm(idOfFilmForScreen);
            return {
                ...state,
                screenOfFilm: screenOfFilm
            };

        case CHANGE_TEXT_OF_BUTTON_MORE_INF_BUTTON :
            const {textOfButton, button} = action.payload;
            const newTextOfMoreInfButton = changeTextOfMoreInfButton(textOfButton, button);
            return {
                ...state,
                textOfButton: newTextOfMoreInfButton
            };
        case CHANGE_DISPLAY_VALUE_OF_INF_BLOCK :
            const {displayValue, idOfBlock} = action.payload;
            const newDisplayValue = changeDisplayValueOfInfBlock(displayValue, idOfBlock);
            return {
                ...state,
                displayValueOfMoreInfBlock: newDisplayValue
            };
        default :
            return state;
    }
}




