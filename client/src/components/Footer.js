import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='d-flex justify-content-center fw-bolder py-3'>
        <span>Made with 💖 by &nbsp; </span> 
        <a href="https://siddhakdak.netlify.app/"> Siddhak Dak</a>
   </div>
    <div className='d-flex justify-content-center gap-3 pb-3'>
        <a href="https://github.com/siddhakdak/"><button className='btn btn-dark' >Github</button></a>
        <a href="https://www.linkedin.com/in/siddhak-dak/"><button className='btn btn-info'>LinkedIn</button></a>
    </div>
    </>
  ) 
}

export default Footer;