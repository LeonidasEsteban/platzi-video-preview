import React from 'react';
import Playlist from '../../playlist/components/playlist.js';
import './category.css';

function Category(props) {
  console.log(props)
  return (
    <div className="Category">
      <p className="Category-description">{props.description}</p>
      <h2 className="Category-title">{props.title}</h2>
      <Playlist
        playlist={props.playlist}
        openModal={props.openModal}
      />
    </div>
  )
}

export default Category
