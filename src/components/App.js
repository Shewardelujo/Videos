import React, { Component } from 'react';
import youtube from '../api/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';


 class App extends Component {
    state= {videos: [], selectedVideo: null};

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            } 
        })
        this.setState({videos: response.data.items});
    };

    onVideoSelect = (video) => {
        console.log('from the app!', video);
    }

    render() {
        return (
            <div className="ui container">
               <SearchBar onRequestSubmit = {this.onTermSubmit}/>
               <VideoList onVidSelect = {this.onVideoSelect} videos= {this.state.videos}/>
            </div>
        )
    }
}

export default App;