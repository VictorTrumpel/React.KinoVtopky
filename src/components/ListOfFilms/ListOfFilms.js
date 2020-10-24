import React from 'react';
import shortid from 'shortid';
import {FilmItem} from "../FilmItem/FilmItem";

export function ListOfFilms(props) {
    const {arrayOfWorstFilms} = props;
    return (
        <section className={"list-of-films"}>
            {arrayOfWorstFilms.map((film) => {
                const {id, title, name, release_date, vote_average, overview, poster_path, first_air_date} = film;
                return(
                    <FilmItem
                        key={shortid.generate()}
                        id={id}
                        title={title}
                        name={name}
                        release_date={release_date}
                        vote_average={vote_average}
                        overview={overview}
                        poster_path={poster_path}
                        first_air_date={first_air_date}
                    />);
            })}
        </section>
    );
}