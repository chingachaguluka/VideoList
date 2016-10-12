import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAgRmTRGJqgujZ5Xej16_7T4bIAP1VaKPg';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            term: null,
            selectedVideo: null
        };

        YTSearch({key: API_KEY, term: 'surfboards' }, (videos) => {
            this.setState( {videos: videos, selectedVideo: videos[0]} );
        });
    }


    render() {
    
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList videos={this.state.videos} 
                    onVideoSelect={ (selectedVideo) => this.setState({selectedVideo})}
                />
            </div>
        );
    }
}

//Render the component on the DOM
ReactDOM.render(<App />, document.querySelector('.container'));