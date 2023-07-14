import React from 'react'

function Product({data}) {
 
console.log(data);
  return (
    <div>
      <img src={data.image} alt="" />
    </div>
  )
}

export default Product
