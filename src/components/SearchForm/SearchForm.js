import React from 'react';

const SearchFrom = function(props) {
    const {releaseYear,typeOfContent} = props;
    const handleInputChange = props.handleInputChange;
    const handleSubmit = props.onSubmit;

    return (
        <form onSubmit={handleSubmit} className={'search-form'}>
            <select className={"select-form"} name="typeOfContent" id="" onChange={handleInputChange} value={typeOfContent}>
                <option value="movie">Кино</option>
                <option value="tv">Сериалы</option>
            </select><br/>
            <input
                className={"input-form"}
                placeholder={"Введите год"}
                type="text"
                name={'releaseYear'}
                value={releaseYear}
                onChange={handleInputChange}
                required
            /><br/>
            <input
                className={"btn-input-form"}
                type="submit"/>
        </form>
    );
};

export default SearchFrom;