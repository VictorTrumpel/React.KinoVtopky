import React from 'react';

export function CastItem(props) {
    const {profile_path, name, character} = props;
    return (
        <div className={"cast-list__cast-item"} >
            <img
                className={"cast-item__foto"}
                src={'https://image.tmdb.org/t/p/original'+profile_path}
                alt={name}
            /><br/>
            <span>{character} - {name}</span>
        </div>
    );
}