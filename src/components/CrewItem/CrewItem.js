import React from 'react';

export function CrewItem(props) {
    const {department, name, profile_path} = props;
    return (
        <div className={"crew-list__crew-item"}>
            <img
                src={'https://image.tmdb.org/t/p/original'+profile_path}
                alt={name}
                className={"crew-item__foto"}
            /><br/>
            <span>name: {name}</span><br/>
            <span>departament: {department}</span>
        </div>
    );
}