import React, { Component } from 'react';
import Video from './video';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer'
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner';
import Volume from '../components/volume';
import FullScreen from '../components/full-screen';
import Title from '../components/title';
import Controls from '../components/video-player-controls';
import Layout from '../components/video-player-layout';

class VideoPlayer extends Component {
  state = {
    pause: true,
    duration: 0,
    currentTime: 0,
    loading: false,
    volume: 1,
  }
  togglePlay = () => {
    this.setState({
      pause: !this.state.pause
    })
  }
  handleLoadedMetadata = (event) => {
    // event.target.timeupdate(1000);
    this.video = event.target;
    this.setState({
      duration: this.video.duration
    })
  }
  handleTimeUpdate = (event) => {
    this.setState({
      currentTime: this.video.currentTime
    })
  }
  handleProgressChange = (event) => {
    this.video.currentTime = event.target.value
  }
  handleSeeking = event => {
    console.log('iniciando movimiento')
    this.setState({
      loading: true,
    })
  }
  handleSeeked = event => {
    console.log('movimiento finalizado')
    this.setState({
      loading: false,
    })
  }
  handleVolumeChange = event => {
    // console.log(event);
    this.setState({
      volume: event.target.value
    })
  }
  handleFullScreenClick = event => {
    console.log('get full screen')
    if (!document.webkitIsFullScreen) {
      this.player.webkitRequestFullscreen();
    } else {
      document.webkitExitFullscreen();
    }
  }
  setRef = (element) => {
    this.player = element;
  }
  componentDidMount() {
    this.setState({
      pause: (!this.props.autoplay)
    })
  }
  render() {
    return (
      <Layout setRef={this.setRef}>
        <Title
          title={this.props.title}
        />
        <Controls>
          <PlayPause
            pause={this.state.pause}
            handleClick={this.togglePlay}
          />
          <Timer
            duration={this.state.duration}
            currentTime={this.state.currentTime}
          />
          <ProgressBar
            duration={this.state.duration}
            currentTime={this.state.currentTime}
            handleProgressChange={this.handleProgressChange}
          />
          <Volume
            handleVolumeChange={this.handleVolumeChange}
            value={this.state.volume}
          />
          <FullScreen
            handleFullScreenClick={this.handleFullScreenClick}
          />
        </Controls>
        <Spinner
          active={this.state.loading}
        />
        <Video
          autoplay={this.props.autoplay}
          volume={this.state.volume}
          pause={this.state.pause}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
          src={this.props.src}
        />
      </Layout>
    )
  }
}

export default VideoPlayer;
