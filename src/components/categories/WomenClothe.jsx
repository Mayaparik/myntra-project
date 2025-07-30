import React, { useEffect, useState } from 'react'

function WomenClothe() {

  const[products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/smartphones")
    .then((res) => res.json())
    .then((data) => {
      setProducts(data.products)
      console.log(data)    
    })
    .catch((error) => console.log("error")
  )
}, [])


  return (
    <div className='grid grid-cols-5'>
      {
        products.map((item) => (
          <div key={item.id}>
            <img src={item.images[0]} alt="" />
          </div>
        ))
      }
    </div>
  )
}

export default WomenClothe
