import React from 'react'
import SendIcon from '@mui/icons-material/Send';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='left'>
        <input className='search' type='search' placeholder='Email' />
        <button className='button-em'><SendIcon/></button>
      </div>
      <div className='bottom'>
      <img src="Img/payment.png" alt="" />
      </div>
    </div>
  )
}

export default Footer