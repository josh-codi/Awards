import React from 'react'

function Footer() {
  return (
    <div className='footer flex justify-center items-start bg-[#0f305f] py-5 text-white text-left' style={{height: '400px', width: '100%'}}>
      <section className="flex flex-col text-left mx-3" style={{width: '40%'}}>
        <div className='text-left w-full mb-3 py-3' style={{borderBottom: '1px solid white'}}>
          <p>About Us</p>
        </div>
        <div>
          <p>Smartkast is an event agency that specializes in digital voting and market promotion programs for brands that target the entertainment industry with exceptional interest in youth events.</p>
        </div>
      </section>
      <section className="flex flex-col text-left mx-3" style={{width: '40%'}}>
        <div className='text-left w-full mb-3 py-3' style={{borderBottom: '1px solid white'}}>
          <p>Contact Us</p>
        </div>
        <div className="flex flex-col w-full items-start text-left justify-between h-40">
          <p className='text-left'>Behind Race Course TroTro Station, Nii Okaiman East Accra</p>
          <p className='text-left'>Box Nb 996 Nii Boi Man Accra Ghnaa</p>
          <p className='text-left'>0246414259 / 0548933077</p>
          <p className='text-left'>info@smartkastgh.com</p>
        </div>
      </section>
    </div>
  )
}

export default Footer