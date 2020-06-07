import React from 'react';
import './style.css';

const InitialPage = () => {
  return (
    <main className='initial_page'>
      <div className='initial_page_element'>
        <button className='btn btn_hover'>WOMEN</button>
      </div>
      <div className='initial_page_element'>
        <button className='btn btn_hover'>MEN</button>
      </div>
      <div className='initial_page_element'>
        <button className='btn btn_hover'>ALL</button>
      </div>
    </main>
  )
}

export default InitialPage;