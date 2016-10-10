import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
<<<<<<< HEAD
=======

>>>>>>> origin/master

const API_KEY = 'AIzaSyAgRmTRGJqgujZ5Xej16_7T4bIAP1VaKPg';

class App extends Component {
<<<<<<< HEAD

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            term: null
        };

        YTSearch({key: API_KEY, term: 'surfboards' }, function(videos) {
            this.setState( {videos: videos} );
        });
    }


    render () {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}
=======
    
    constructor (props){
        super(props);

        this.state = { videos: [], term: null}

        YTSearch( {key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({videos: videos})
        });
    }
>>>>>>> origin/master

    
    render() {
    
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}
//Render the component on the DOM
ReactDOM.render(<App />, document.querySelector('.container'));