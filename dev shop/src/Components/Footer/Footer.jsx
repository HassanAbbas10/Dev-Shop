import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'>
        <input className='search' type='search' placeholder='Email' />
        <button className='button-em'><SendIcon/></button>
      </div>
     
      <div className='bottom'>
      <img className='footer-img' src="Img/payment.png" alt="" />
      </div>
    </div>
  )
}

export default Footer