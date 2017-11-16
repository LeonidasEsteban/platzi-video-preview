import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import ModalChild from '../components/modal.js';

class Modal extends Component {
  render() {
    return createPortal(
      this.props.children,
      document.getElementById('modal-container')
    )
  }
}

export default Modal
