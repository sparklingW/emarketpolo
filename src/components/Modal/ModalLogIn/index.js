import React from 'react';

// Style and assets
import './style.css';

const ModalLogIn = ({ closeModal }) => (
  <div className='modal_content'>
    <div>
      Hello World
    </div>
    <div onClick={closeModal}>X</div>
  </div>
);

export default ModalLogIn;