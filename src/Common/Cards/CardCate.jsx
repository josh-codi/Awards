import React from 'react'
import { Link } from 'react-router-dom'

function CardCate({showImage}) {
  return (
    <Link to={'/nominee/23'} className='cardcart flex flex-col mr-4 my-3' style={{width: '250px', border: '1px solid lightgray'}}>
      {
        showImage && (
          <div className="w-full h-32">
            <img className='img-fit' src={'https://images.unsplash.com/photo-1661956602139-ec64991b8b16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=965&q=80'} alt="" />
          </div>
        )
      }
        
      <div className="flex flex-col text-gray-500 py-3">
          <b>BEST ART OF THE YEAR</b>
      </div>
    </Link>
  )
}

export default CardCate