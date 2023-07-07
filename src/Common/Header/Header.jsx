import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [showSidebar, setShowSidebar] = useState(false)
  return (
    <header className='w-full bg-[#ffffff8e] justify-between flex items-center px-10' style={{minHeight: '65px'}}>
      <Link to={'/'} className='h-full' style={{width: '30px', height: '30px'}}>
        <img src="https://plus.unsplash.com/premium_photo-1669227512593-68bbb03c78a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3432&q=80" alt="" className='img-fit'/>
      </Link>
      <div className="navList flex items-center justify-between h-full" style={{width: '400px'}}>
        <Link to={'/'}><p>HOME</p></Link>
        <Link to={'/about'}><p>ABOUT US</p></Link>
        <Link to={'/terms'}><p>TERMS & CONDITIONS</p></Link>
      </div>
      <i onClick={()=>setShowSidebar(!showSidebar)} className="fa fa-bars"></i>
      {
        showSidebar && (
          <div className="sidebar animatefromright" style={{position: 'fixed', width: '100%', height: '100vh', top: '0', left: '0', right: '0', bottom: '0'}}>
            <section onClick={()=>setShowSidebar(false)} className='bg-[#0000006d]' style={{width: '40%', height: '100%'}}></section>
            <section className='bg-white px-3 relative' style={{minWidth: '60%', height: '100%'}}>
              <div className="w-full flex pr-3 py-3 justify-between" style={{borderBottom: '1px solid gray'}}>
                <h1 className='font-bold text-lg'>E-Vote</h1>
                <i onClick={()=>setShowSidebar(false)} className="fa fa-times"></i>
              </div>  
              <div className="flex flex-col mt-8">
                <Link onClick={()=>setShowSidebar(false)} to={'/'} className='bg-[#133d7713] mb-3 flex justify-center items-center' style={{height: '40px', width: '100%'}}>
                  <p>HOME</p>
                </Link>
                <Link onClick={()=>setShowSidebar(false)} to={'/about'} className='bg-[#133d7713] mb-3 flex justify-center items-center' style={{height: '40px', width: '100%'}}>
                  <p>ABOUT</p>
                </Link>
                <Link onClick={()=>setShowSidebar(false)} to={'/terms'} className='bg-[#133d7713] mb-3 flex justify-center items-center' style={{height: '40px', width: '100%'}}>
                  <p>TERMS & CONDITIONS</p>
                </Link>
              </div>

            </section>
          </div>
        )
      }
      
    </header>
  )
}
