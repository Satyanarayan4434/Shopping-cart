import React from 'react'

function Cart() {
  return (
    <div className='flex flex-col justify-center items-center h-screen gap-3'>
      <h1 className='text-lg'>Your Cart Is Empty!</h1>
      <button className='border px-3 py-1 rounded-md bg-teal-900 text-white shadow-lg'>Shop Now</button>
    </div>
  )
}

export default Cart
