import React, { Component } from 'react';
import VideoListItem from './components/video_list_item';


const VideoList = (props) => {

    const videoItem = props.videos.map((video) => {
        return (
            <VideoListItem video={video} />
        )
    }

    return (
        <ul className="col-md-4 list-group">
            
        </ul>
    );
}

export default VideoList;