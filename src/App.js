import React, { Component } from 'react';
import './platzi-video.css'
import { createPortal } from 'react-dom';
import ModalContainer from './widgets/containers/modal';
import Modal from './widgets/components/modal';
import VideoPlayer from './player/containers/video-player';
import logo from '../images/logo.png';

import Categories from './categories/ui/categories';

class PlatziVideo extends Component {
  state = {
    modalVisible: false,
  }
  openModal = (video) => {
    this.setState({
      modalVisible: true,
      video
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
        <div className="PlatziVideo-left">
          <img src={logo} width={250} />
        </div>
        <Categories
          categories={this.props.data.categories}
          openModal={this.openModal}
        />
        {/*<VideoPlayer />*/}

        {
          this.state.modalVisible &&
          <ModalContainer>
            <Modal
              handleModal={this.closeModal}
            >
              <VideoPlayer
                autoplay
                title={this.state.video.title}
                src={this.state.video.src}
              />
            </Modal>
          </ModalContainer>
        }
      </div>
    );
  }
}

export default PlatziVideo;
