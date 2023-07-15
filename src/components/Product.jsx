import React from 'react'

function Product({data}) {
 
console.log(data);
  return (
    <div className='opacity-95 w-[17rem] h-[21rem] justify-between flex flex-col border p-7 py-7 rounded-lg shadow-xl hover:shadow-2xl hover:scale-110 transition-all '>
      <p className='text-lg font-semibold opacity-80'>{data.title.substring(0, 13)}...</p>
      <p className='text-[10px] opacity-75'>{data.description.substring(0, 60)}...</p>
      <img src={data.image} alt="" className='w-[7rem] mx-auto p-2'/>
      <div className='flex justify-between items-center'>
        <p className='text-lg font-semibold text-teal-700  transition-all'>${data.price}</p>
        <button className='border-[2px] border-black text-sm   py-1 px-3 rounded-2xl hover:bg-black transition-all hover:text-white ease-in-out' >{
          true? "Add to cart" : "Remove From Cart"
        }</button>
      </div>
    </div>
  )
}

export default Product
