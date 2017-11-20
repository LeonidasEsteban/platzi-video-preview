import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends PureComponent {
  handleClick = () => {
    this.props.openModal(this.props);
  }
  render() {
    // console.log(this.props)
    // const background = {
    //   backgroundImage: `url(${this.props.cover})`
    // }
    return (
      <div
        onClick={this.handleClick}
        className="Media"
        // style={background}
      >
        <div className="Media-cover">
          <img
            src={this.props.cover}
            className="Media-image"
            width={245}
            height={160}
          />
        </div>
        <h3
          className="Media-title"
        >
          {this.props.title}
        </h3>
        <p
          className="Media-author"
        >
          {this.props.author}
        </p>
      </div>
    )
  }
}

Media.propTypes = {
  openModal: PropTypes.func.isRequired,
  cover: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  // author: PropTypes.num,
  author: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['audio', 'video']).isRequired,
  // details: PropTypes.object.isRequied,
}


export default Media;
