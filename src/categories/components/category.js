import React from 'react';
import Playlist from '../../playlist/components/playlist.js';
import './category.css';
import HandleError from '../../error/containers/handle-error'

function Category(props) {
  return (
    <div className="Category">
      <p className="Category-description">{props.description}</p>
      <h2 className="Category-title">{props.title}</h2>
      <HandleError>
        <Playlist
          playlist={props.playlist}
          openModal={props.openModal}
        />
      </HandleError>
    </div>
  )
}

export default Category
