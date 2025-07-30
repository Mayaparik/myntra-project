import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSearch } from '../../context/SearchContext'

function Mobiles() {
  const [products, setProducts] = useState([])
  const {searchTerm} = useSearch()

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

  const filterMobile = products.filter((product)=> 
  product.title.toLowerCase().includes(searchTerm.toLowerCase()) 
  )


  return (
    <div className='grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:px-12 px-6 gap-4 '>
      {
        filterMobile.map((product) => (
          <div key={product.id} className='relative'>
            <Link to={`/product-dummy/${product.id}`}>
              <img src={product.images?.[0]} alt="" className='w-full px-4 pt-4' />
              <button className="absolute border left-1 bottom-22 cursor-pointer border-gray-200 text-xs  backdrop-blur-2xl hover:border-black px-1 py-1 items-center"> {product.rating}<i className="bi bi-star-fill mx-1 text-emerald-700"></i>| Rating </button>
              <div className=' p-2 text-center space-y-1'>
                <h1 className='text-lg font-semibold'>{product.title}</h1>
                <p className='font-bold'>UNDER ${product.price}</p>
              </div>
            </Link>
          </div>
        ))
      }
    </div>
  )
}

export default Mobiles
