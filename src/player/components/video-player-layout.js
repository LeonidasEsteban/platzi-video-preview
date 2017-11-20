import React from 'react';
import './video-player-layout.css';

function VideoPlayer(props) {
  return (
    <div className="VideoPlayer" ref={props.setRef}>
      {props.children}
    </div>
  )
}

export default VideoPlayer;
