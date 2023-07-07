import React from 'react'
import Card from '../../Common/Cards/Card'
import CardCate from '../../Common/Cards/CardCate'

function Categories() {
  return (
    <section className='m-auto mt-5 page'>
        <div className="w-full flex items-baseline justify-start">
            <h1 className='text-4xl font-bold'>SRC President</h1>
            <b className='font-light ml-3'>Categories</b>
        </div>
        <div className='flex flex-wrap'>
            <CardCate />
            <CardCate />
            <CardCate />
            <CardCate />
            <CardCate />
            <CardCate />
            <CardCate />
            <CardCate />
        </div>
    </section>
    
  )
}

export default Categories