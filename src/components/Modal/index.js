import React from 'react';

// Styles and assets
import './style.css';

// Costume Components
import ModalLogIn from './ModalLogIn';
import ModalSignUp from './ModalSignUp/index';

const Modal = ({ modal, closeModal }) => {
  return (
    <div className='modal_wrapper'>
      {
        modal === 'sign_up' && <ModalSignUp closeModal={closeModal} />
      }
      {
        modal === 'log_in' && <ModalLogIn closeModal={closeModal} />
      }
    </div>
  )
}

export default Modal;