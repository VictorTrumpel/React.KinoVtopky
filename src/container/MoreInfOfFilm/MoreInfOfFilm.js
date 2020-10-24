import React from 'react';
import {store} from "../../CreateStore";
import shortid from 'shortid';
import {
    changeDisplayValueOfInfBlock,
    changeTextOfMoreInfButton,
    getMainCastAndCrewOfFilm
} from "../../flux/createActions";
import {ShowCastOfFilm} from "../../components/ShowCastOfFilm/ShowCastOfFilm";
import {ShowCrewOfFilm} from "../../components/ShowCrewOfFilm/ShowCrewOfFilm";
import {ShowScreenOfFilm} from "../../components/ShowScreenOfFilm/ShowScreenOfFilm";
import {getScreenOfFilm} from "../../flux/createActions";
import './MoreInfOfFilm.css';
import {translateButtonAndMoreInf} from "../../flux/translateButtonAdnMoreInf";

export default class MoreInfOfFilm extends React.Component{

    constructor(props) {
        super();

        const {idOfFilm} = props;

        this.state = {
            idOfFilm: idOfFilm,
            castOfFilm: [],
            crewOfFilm: [],
            screenOfFilm: [],
            textOfButton: "Подробнее",
            idOfMoreInfBlock: shortid.generate(),
            displayValueOfMoreInfBlock: 'none'
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        const buttonMoreInf = event.target;
        this.setState(state => {
            const {idOfFilm, textOfButton, displayValueOfMoreInfBlock, idOfMoreInfBlock} = state;
            store.dispatch(getMainCastAndCrewOfFilm(idOfFilm));
            store.dispatch(getScreenOfFilm(idOfFilm));
            store.dispatch(changeTextOfMoreInfButton({
                textOfButton: textOfButton,
                button: buttonMoreInf
            }));
            store.dispatch(changeDisplayValueOfInfBlock({
                displayValue: displayValueOfMoreInfBlock,
                idOfBlock: idOfMoreInfBlock
            }));
            translateButtonAndMoreInf(buttonMoreInf, idOfMoreInfBlock, displayValueOfMoreInfBlock);
            return ({
                castOfFilm: store.getState().castOfFilm,
                crewOfFilm: store.getState().crewOfFilm,
                screenOfFilm: store.getState().screenOfFilm,
                textOfButton: store.getState().textOfButton,
                displayValueOfMoreInfBlock: store.getState().displayValueOfMoreInfBlock
            });
        });

    }

    render() {
        const {castOfFilm, crewOfFilm, screenOfFilm, textOfButton, idOfMoreInfBlock} = this.state;
        const handleClick = this.handleClick;

        return (
            <div className={"film-item__more-inf-of-film"}>
                <button
                    className={"more-inf-of-film__button"}
                    onClick={handleClick}
                >{textOfButton}</button>
                <div className={"more-inf-of-film__inf scroll-block"} id={idOfMoreInfBlock} >
                    <ShowCastOfFilm castOfFilm={castOfFilm}/>
                    <ShowCrewOfFilm crewOfFilm={crewOfFilm}/>
                    <ShowScreenOfFilm screenOfFilm={screenOfFilm}/>
                </div>
            </div>
        );
    }
}