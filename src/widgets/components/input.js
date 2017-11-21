import React from 'react';
import './input.css';

function Input(props) {
  return (
    <input
      className="Input"
      type="text"
      onChange={props.handleChange}
      placeholder={props.placeholder}
      ref={props.setRef}
    />
  )
}

export default Input
