import React, { Component } from 'react';

const VideoListItem = (props) => {
  
  const video = props.video;
  const onVideoSelect = props.onVideoSelect;
  const imageUrl = props.video.snippet.thumbnails.default.url;

  return (
    <li className="list-group-item" onClick={() => onVideoSelect(video)}>
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{props.video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;