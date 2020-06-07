import React from 'react';

// Styles and assets
import {
  Logo,
  Package,
  Search_Image,
} from '../../assets/images/index';
import './style.css';

// Costume Hooks
import { useInput } from '../../costumeHooks/useInput';
import { useModal } from '../../costumeHooks/useModal';

const ModalIn = ({ close }) => <div>Log In <span onClick={close}>X</span></div>
const ModalUp = ({ close }) => <div>Sign Up <span onClick={close}>X</span></div>

const Header = () => {
  const search = useInput('');
  const modal = useModal('');

  return (
    <React.Fragment>
      {modal.value !== '' && modal.value === 'log_in' && <ModalIn close={modal.closeModal} />}
      {modal.value !== '' && modal.value === 'sign_up' && <ModalUp close={modal.closeModal} />}
      <header className='header_big'>
        <div className='header_logo'>
          <img
            src={Logo}
            alt='Polo Refresh Logo'
          />
        </div>
        <div className='header_search'>
          <div className='header_search_img'>
            <img 
              src={Search_Image}
              alt='Search Product'
            />
          </div>
          <input
            type='text'
            placeholder='Search'
            className='input'
            {...search}
          />
        </div>
        <div className='header_navigation'>
          <button className='btn btn_hover' name='log_in' {...modal}>LOG IN</button>
          <button className='btn btn_image'>
            <img 
              src={Package}
              alt='Shop list'
            />
          </button>
          <button className='btn btn_hover' name='sign_up' {...modal}>SIGN UP</button>
        </div>
      </header>
      {/* Mobile Header */}
      <header className='header_mobile'>
        <div className='header_mobile_top'>
          <div className='header_logo'>
            <img
              src={Logo}
              alt='Polo Refresh Logo'
            />
          </div>
          <div className='header_navigation'>
            <button className='btn btn_hover'>LOG IN</button>
            <button className='btn btn_image'>
              <img 
                src={Package}
                alt='Shop list'
              />
            </button>
            <button className='btn btn_hover'>SIGN UP</button>
          </div>
        </div>
        <div className='header_search_mobile'>
          <div className='header_search_img'>
            <img 
              src={Search_Image}
              alt='Search Product'
            />
          </div>
          <input
            type='text'
            placeholder='Search'
            className='input'
            {...search}
          />
        </div>
      </header>
    </React.Fragment>
  )
}

export default Header;