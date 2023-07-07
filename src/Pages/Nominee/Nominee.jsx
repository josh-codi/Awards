import React, { useState } from 'react'

function Nominee() {
    const [paymentType, setPaymentType] = useState('')

    const handleOptionChange = (event) => {
        setPaymentType(event.target.value);
    };
    return (
        <section className='nominee m-auto py-14 flex justify-center items-start' style={{width: '80%'}}>
            <div className='sideone w-1/2' style={{minHeight: '400px'}}>
                <div className="w-full" style={{height: '80%'}}>
                    <img className='img-fit' src="https://plus.unsplash.com/premium_photo-1669227512593-68bbb03c78a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3432&q=80" alt="" />
                </div>
                <div className="w-full h-full py-3 pr-3 flex flex-wrap justify-between">
                    <aside className="flex flex-col justify-between bg-[#0634a027] text-[#102647] py-2 px-4" style={{width: '31%'}}>
                        <h1>23</h1>
                        <b className='ml-2'>Votes</b>
                    </aside>
                    <aside className="flex flex-col justify-between bg-[#0634a027] text-[#102647] py-2 px-4" style={{width: '31%'}}>
                        <h1>Rate (₵)</h1>
                        <b className='ml-2'>GHS2.00</b>
                    </aside>
                    <aside className="flex flex-col justify-between bg-[#0634a027] text-[#102647] py-2 px-4" style={{width: '31%'}}>
                        <h1>Rate ($)</h1>
                        <b className='ml-2'>$2.00</b>
                    </aside>
                </div>
            </div>
            <form action="" className='px-4 w-1/2' >
                
                <div style={{background: `${paymentType === 'momo'?'rgb(0,23,100,.05)':'white'}`}} className="form1 flex w-full flex-col items-start mb-5 border-1 border-solid border-gray-200 p-3">
                    <div className="flex mb-2 py-2 w-full">
                        <input className='mr-3' type="radio" name='paymentMethod' value='momo' checked={paymentType === 'momo'} onChange={handleOptionChange}/>
                        <h1 className='text-xl text-[#193762] font-bold'>Mobile Money</h1>
                    </div>
                    <div className="flex w-full">
                        <div className="w-1/2 m-2 flex flex-col items-start">
                            <h1 className='text-lg'>Network</h1>
                            <select name="" id="" className='py-2 w-full' style={{border: '2px solid gray', height: '50px'}}>
                                <option value="mtn">MTN Mobile Money</option>
                                <option value="tigo">AirtelTigo Cash</option>
                                <option value="vodafone">Vodafone Cash</option>
                            </select>
                        </div>
                        <div className="w-1/2 m-2 flex flex-col items-start">
                            <h1 className='text-lg'>Wallet Number</h1>
                            <input style={{border: '2px solid gray', height: '50px'}} className='mr-3 w-full pl-2' type="number" name='paymentMethod' checked={paymentType === 'momo'} onChange={handleOptionChange}/>
                        </div>
                    </div>
                </div>

                <div style={{background: `${paymentType === 'card'?'rgb(0,23,100,.05)':'white'}`}} className="form2 flex w-full flex-col items-start mb-5 border-1 border-solid border-gray-200 p-3">
                    <div className="flex py-2 w-full">
                        <input className='mr-3' type="radio" name='paymentMethod' value='card' checked={paymentType === 'card'} onChange={handleOptionChange}/>
                        <h1 className='text-lg'>Card Payment</h1>
                    </div>
                </div>

                <div className="w-full">
                    <button className="w-full bg-[#193762] h-14 rounded-md">
                        <b className='text-white'>Vote Now</b>
                    </button>
                </div>
            </form>
        </section>
    )
}

export default Nominee