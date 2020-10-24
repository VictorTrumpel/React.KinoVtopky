import React from 'react';
import './FilmItem.css';
import MoreInfOfFilm from "../../container/MoreInfOfFilm/MoreInfOfFilm";
import {MainInfOfFilm} from "../MainInfOfFilm/MainInfOfFilm";

export function FilmItem(props) {
    const {id, title, name, release_date, vote_average, overview, poster_path, first_air_date} = props;
    return (
        <div className={"list-of-films__film-item"}>
            <div className={"film-item__main-in-of-film"}>
                <div className={"film-item__poster-container"}>
                    <img
                        className={"main-in-of-film__poster"}
                        src={'https://image.tmdb.org/t/p/original'+poster_path}
                        alt={name+title}
                    />
                </div>
                <MainInfOfFilm
                    title={title}
                    name={name}
                    release_date={release_date}
                    first_air_date={first_air_date}
                    vote_average={vote_average}
                    overview={overview}
                />
            </div>
            <MoreInfOfFilm idOfFilm={id}/>
        </div>
    );
}