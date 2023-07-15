import React from 'react'

function Product({data}) {
 
console.log(data);
  return (
    <div>
      <p>{data.title}</p>
      <p>{data.description}</p>
      <img src={data.image} alt="" />
      <div>
        <p>{data.price}</p>
        <button>{
          true? "Add to cart" : "Remove From Cart"
        }</button>
      </div>
    </div>
  )
}

export default Product
