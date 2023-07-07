import React from 'react'
import { Link } from 'react-router-dom'

function Card({data}) {
  return (
    <div className='cardd flex flex-col m-4' style={{width: '250px', border: '1px solid lightgray'}}>
        <div className="w-full h-52">
            <img className='img-fit' src={'https://images.unsplash.com/photo-1661956602139-ec64991b8b16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=965&q=80'} alt="" />
        </div>
        <div className="flex flex-col text-gray-500 py-3">
            <b>SRC Awards Night</b>
            <small>23/02/23</small>
        </div>
        <div className="w-full justify-center h-fit py-3 bg-[#2058c1] text-white">
          <Link to={'/awards/23'} className='w-full h-full'>
            <b>Select Event</b>
          </Link>
        </div>
    </div>
  )
}

export default Card