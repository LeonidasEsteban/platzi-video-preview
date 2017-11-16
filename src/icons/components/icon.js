import React, { Component } from 'react';

class Icon extends Component {
  render() {
    const {
      className,
      color,
      size,
      children
    } = this.props;

    return (
      <svg
        fill={color}
        height={size}
        width={size}
        viewBox="0 0 32 32"
        children={children}
      />
    )
  }
}

Icon.defaultProps = {
  color: 'white',
  size: 16,
}

export default Icon;
