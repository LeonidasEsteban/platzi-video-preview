import React from 'react';
import './video-item.css';

function VideoItem(props) {
  console.log(props)
  const background = {
    backgroundImage: `url(${props.cover})`
  }
  return (
    <div
      onClick={props.handleClick}
      className="VideoItem"
      style={background}
    >
      {props.name}
    </div>
  )
}

export default VideoItem;
