import React from 'react'
import Card from '../../Common/Cards/Card'
import CardCate from '../../Common/Cards/CardCate'

function Awards() {
  return (
    <div className='flex flex-col m-auto page'>
      <section className="awardDes flex w-full mt-5 mb-3 pb-5 items-start" style={{borderBottom: '3px solid #0f305f'}}>
        <div className="eventImage w-1/2" style={{height: '300px'}}>
          <img className='img-fit' src="https://plus.unsplash.com/premium_photo-1669227512593-68bbb03c78a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3432&q=80" alt="" />
        </div>
        <div className='desContent w-1/2 text-left px-5'>
          <h1 className='font-bold text-3xl'>Ghana Teen Style Awards 2023</h1>

          <div className="flex flex-col items-start mb-3 mt-4 text-left w-full">
            <p>Date</p>
            <small className='text-gray-400'>03 December, 2023</small>
          </div>

          <div className="flex flex-col items-start mb-3 text-left w-full">
            <p>Description</p>
            <small className='text-gray-400'>Ghana Teen Style Awards</small>
          </div>

          <div className="flex flex-col items-start mb-3 text-left w-full">
            <p>Organizer</p>
            <small className='text-gray-400'>GHANA TEENSTYLE AWARDS</small>
          </div>
        </div>
      </section>
      <h1 className='text-xl font-semibold '>Categories</h1>
      <section className="flex flex-wrap justify-center w-full my-3 pt-2" style={{borderTop: '3px solid #0f305f'}}>
        <CardCate/>
        <CardCate/>
        <CardCate/>
        <CardCate/>
        <CardCate/>
      </section>
    </div>
  )
}

export default Awards