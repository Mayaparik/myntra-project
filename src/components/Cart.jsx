import React from 'react'
import { useCart } from '../context/CartContext'
import { Link, useNavigate } from 'react-router-dom'
import bag from '../assets/bag.png'

function Cart() {

  const { cart, removeFromCart, isInCart, addToCart } = useCart()
      const navigate = useNavigate()

  
  return (
    <div className=' pt-8'>
      {
        cart.length === 0 ? (
          <div className='lg:px-12 px-5 py-12 bg-pink-600/80 h-screen my-auto '>
            <div className='bg-white  max-w-xs rounded-lg m-auto h-90 text-center flex flex-col'>
              <img src={bag} alt="" className='w-50 mx-auto ' />
              <Link to='/' className='w-50 bg-pink-500/90 text-white mx-auto py-2 hover:bg-pink-600'>START SHOPPING</Link>
            </div>
          </div>

        ) : (
          <div className='grid grid-cols-2 md:grid-cols-5 gap-4 lg:px-12 px-5 py-12 '>
            {
              cart.map((product) => (
                <div key={product} className="hover:bg-white hover:shadow-md relative space-y-1">
                  <img src={product.thumbnail || product.images?.[0]} alt="" className='w-full object-cover' />
                  <div className='py-2 '>
                    <p className='font-bold'>{product.category.name}</p>
                    <p className='font-bold'>{product.tags?.[0]}</p>
                    <p className="text-sm text-gray-600 line-clamp-1">{product.title}</p>
                    <p className='font-bold text-sm'>${product.price}</p>
                  </div>
                  <button onClick={() => removeFromCart(product.id)} className="bg-pink-600/80 w-full text-xs font-bold cursor-pointer hover:bg-pink-600 py-2 text-white">REMOVE FROM BAG</button>
                  <button onClick={() => navigate('/buy-now', {state: product})}  className="bg-pink-600/80 w-full cursor-pointer font-bold hover:bg-pink-600 py-2 text-sm text-white ">
                        BUY NOW
                  </button>
                </div>
              ))
            }
          </div>
        )
      }
    </div>
  )
}

export default Cart
