import React, { PureComponent } from 'react';
import './video-item.css';

class VideoItem extends PureComponent {
  handleClick = () => {
    this.props.openModal(this.props);
  }
  render() {
    console.log(this.props)
    // const background = {
    //   backgroundImage: `url(${this.props.cover})`
    // }
    return (
      <div
        onClick={this.handleClick}
        className="VideoItem"
        // style={background}
      >
        <div className="VideoItem-cover">
          <img
            src={this.props.cover}
            className="VideoItem-image"
            width={245}
            height={160}
          />
        </div>
        <h3
          className="VideoItem-title"
        >
          {this.props.title}
        </h3>
        <p
          className="VideoItem-author"
        >
          {this.props.author}
        </p>
      </div>
    )
  }
}

export default VideoItem;
