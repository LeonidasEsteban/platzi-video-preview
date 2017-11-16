import React, { Component } from 'react';
import './video.css';

class Video extends Component {
  //events
  // handleLoaderMetadata = (event) => {
  //   console.log(event);
  //   const v = this.video
  //   debugger
  //   this.
  // }
  togglePlay() {
    if (this.props.pause) {
      this.video.play();
    } else {
      this.video.pause();
    }
  }
  setVolume(value) {
    this.video.volume = value;
  }
  // life cycle
  componentWillReceiveProps(nextProps) {
    if (nextProps.pause !== this.props.pause) {
      this.togglePlay();
    }
    if (nextProps.volume !== this.props.volume) {
      this.setVolume(nextProps.volume);
    }
  }
  setRef = (element) => {
    this.video = element
  }
  // componentDidMount() {
  //   const v = this.video
  //   debugger
  // }
  render() {
    const {
      handleLoadedMetadata,
      handleTimeUpdate,
      handleSeeking,
      handleSeeked
    } = this.props;

    return (
      <div className="Video">
        <video
          id="video"
          ref={this.setRef}
          onLoadedMetadata={handleLoadedMetadata}
          onTimeUpdate={handleTimeUpdate}
          onSeeking={handleSeeking}
          onSeeked={handleSeeked}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        ></video>
      </div>
    )
  }
}

export default Video;
