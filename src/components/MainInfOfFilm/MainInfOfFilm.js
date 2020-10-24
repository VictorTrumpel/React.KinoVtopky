import React from 'react';

export function MainInfOfFilm(props) {
    const {title, name, release_date, vote_average, overview, first_air_date} = props;

    return (
        <div className={"main-in-of-film__description scroll-block"}>
            <h2>{title}{name}</h2><br/>
            <span><strong>Дата выхода:</strong> {release_date}{first_air_date}</span><br/>
            <span><strong>Оценка:</strong> {vote_average}</span>
            <p>{overview}</p>
        </div>
    );
}