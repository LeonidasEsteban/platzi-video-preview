import React from 'react';

const modalContainer = document.getElementById('modal-container');


function Modal(props) {
  return (
    <div className="Modal">
      Hola mundo!
      <button onClick={props.handleModal}>cerrar</button>
    </div>
  )
}


export default Modal;
