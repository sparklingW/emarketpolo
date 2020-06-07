import React from 'react';

// Style and assets
import './style.css';

const ModalSignUp = ({ closeModal }) => (
  <div className='modal_content'>
    <div>
      Hello Sign Up
    </div>
    <div onClick={closeModal}>X</div>
  </div>
);

export default ModalSignUp;