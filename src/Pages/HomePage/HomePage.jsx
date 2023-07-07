import React from 'react'
import Card from '../../Common/Cards/Card'

function HomePage() {
  return (
    <div className='text-[red]'>
        
        {/* Search Bar ..... */}
        <div className='w-1/3 flex pl-5 m-auto my-5 homesearch' style={{height: '50px', border: '1px solid gray'}}>
          <div className="flex justify-center items-center">
            <i className="fa fa-search"></i>
          </div>
          <input type="text" className="h-full border-none w-full pl-5" placeholder='Search for events ...'/>
        </div>

        {/* Events ...... */}
        <div className='flex flex-wrap m-auto page'>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
    </div>
  )
}

export default HomePage