import React, { Component } from 'react';
import Media from '../components/media';
import './playlist.css';

function Playlist(props) {
  return (
    <div className="Playlist">
      {
        props.playlist.map((item) => (
          <Media
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
