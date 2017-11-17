import React, { Component } from 'react';
import VideoItem from '../components/video-item';
import './playlist.css';

function Playlist(props) {
  return (
    <div className="Playlist">
      {
        props.playlist.map((item) => (
          <VideoItem
            openModal={props.openModal}
            key={item.id}
            {...item}
          />
        ))
      }
    </div>
  )
}


export default Playlist;
