import React, { Component } from 'react';
import './platzi-video.css'
import Playlist from './playlist/containers/playlist';
import { createPortal } from 'react-dom';
import ModalContainer from './widgets/containers/modal';
import Modal from './widgets/components/modal';
import VideoPlayer from './player/containers/video-player';

class PlatziVideo extends Component {
  state = {
    modalVisible: false,
  }
  openModal = () => {
    this.setState({
      modalVisible: true,
    })
  }
  closeModal = () => {
    this.setState({
      modalVisible: false
    })
  }
  render() {
    return (
      <div className="PlatziVideo">
        <VideoPlayer />
        <Playlist
          openModal={this.openModal}
        />
        {
          this.state.modalVisible &&
          <ModalContainer>
            <Modal
              handleModal={this.closeModal}
            />
          </ModalContainer>
        }
      </div>
    );
  }
}

export default PlatziVideo;
