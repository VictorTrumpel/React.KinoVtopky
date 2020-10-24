import React from 'react';
import {store} from "../../CreateStore";
import SearchFrom from "../../components/SearchForm/SearchForm";
import {getWorstFilms} from "../../flux/createActions";
import {ListOfFilms} from "../../components/ListOfFilms/ListOfFilms";
import './App.css';

export default class SearchWorstMovie extends React.Component {
    constructor() {
        super();

        this.state = {
            typeOfContent: 'movie',
            releaseYear: '2000',
            arrayOfWorstFilms: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const {name, value} = event.target;
        this.setState({[name] : value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState(state => {
           const {releaseYear, typeOfContent} = state;
           store.dispatch(getWorstFilms({releaseYear, typeOfContent}));
           return ({arrayOfWorstFilms: store.getState().arrayOfWorstFilms});
        });
    }

    render() {
        const {releaseYear, arrayOfWorstFilms, typeOfContent} = this.state;
        const handleSubmit = this.handleSubmit;
        const handleInputChange = this.handleInputChange;

        return (
            <section className={'app-holst'}>
                <header>
                    <h1><span>КиноВтопку!</span></h1>
                    <SearchFrom
                        typeOfContent={typeOfContent}
                        releaseYear={releaseYear}
                        onSubmit={handleSubmit}
                        handleInputChange={handleInputChange}
                    />
                </header>
                <ListOfFilms arrayOfWorstFilms={arrayOfWorstFilms}/>
            </section>
        );
    }


}

