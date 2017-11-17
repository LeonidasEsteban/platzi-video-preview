import React from 'react';
import './modal.css';

function Modal(props) {
  console.log(props.children)
  return (
    <div className="Modal">
      {/*Hola mundo!*/}

      {props.children}
      <button
        onClick={props.handleModal}
        className="Modal-close"
      />
    </div>
  )
}


export default Modal;
