import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAgRmTRGJqgujZ5Xej16_7T4bIAP1VaKPg';
//Create a component. THis component should produce some html

const App = function () {
    return (
        <SearchBar />
    );
};

//Render the component on the DOM
ReactDOM.render(<App />, document.querySelector('.container'));