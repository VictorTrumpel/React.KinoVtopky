import React from 'react';
import shortid from 'shortid';
import {CrewItem} from "../CrewItem/CrewItem";

export function ShowCrewOfFilm(props) {
    const {crewOfFilm} = props;
    return (
        <div>
            <h4>Над фильмом трудились:</h4>
            <div className={"more-inf-of-film__crew-list"}>
                {crewOfFilm.map(crew => {
                    const {department, name, profile_path} = crew;
                    return(
                        <CrewItem
                            key={shortid.generate()}
                            department={department}
                            name={name}
                            profile_path={profile_path}
                        />
                    )
                })}
            </div>
        </div>
    )
}