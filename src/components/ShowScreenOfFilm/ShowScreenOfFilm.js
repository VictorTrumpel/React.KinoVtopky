import React from 'react';
import shortid from 'shortid';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    width: 300,
    arrows: false,
    centreMode: true,

    breakpoint: 600,
};

export function ShowScreenOfFilm(props) {
    const {screenOfFilm} = props;
    return (
        <div>
            <h4>Скриншоты фильма:</h4>
            <div className={"slider-container"}>
                <Slider {...settings}>
                    {screenOfFilm.map(screens => {
                        const {file_path} = screens;
                        return (
                            <div key={shortid.generate()}>
                                <img
                                    className={"screen-of-film"}
                                    src={'https://image.tmdb.org/t/p/w780'+file_path}
                                    alt=""
                                />
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    )
}