import React from 'react';
import shortid from 'shortid';
import {CastItem} from '../CastItem/CastItem'

export function ShowCastOfFilm(props) {
    const {castOfFilm} = props;
    return (
        <div>
            <h4>Главный каст</h4>
            <div className={"more-inf-of-film__cast-list"}>
                {castOfFilm.map( actor => {
                    const {profile_path, name, character} = actor;
                    return (
                        <CastItem
                            key={shortid.generate()}
                            profile_path={profile_path}
                            name={name}
                            character={character}
                        />
                    )
                })}
            </div>
        </div>
    );

};