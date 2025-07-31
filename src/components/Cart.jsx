import React from 'react'
import { useCart } from '../context/CartContext'
import { Link, useNavigate } from 'react-router-dom'
import bag from '../assets/bag.png'

function Cart() {

  const { cart, removeFromCart, isInCart, addToCart } = useCart()
  const navigate = useNavigate()


  return (
    <div className='lg:pt-10 pt-25'>
      {
        cart.length === 0 ? (
          <div className='max-w-sm rounded-lg m-auto text-center flex flex-col pt-10 space-y-2'>
            <img src={bag} alt="" className='md:w-70 w-40 mx-auto' />
            <p className='font-bold text-xl'>Hey, it feels so light!</p>
            <p className='text-gray-400 text-sm'>There is nothing in your bag, Let's add some items.</p>
            <Link to='/' className='w-50 tracking-wider border border-pink-600/80 text-pink-600/80 hover:text-white font-semibold mx-auto py-2 hover:bg-pink-600/80   '>ADD ITEMS</Link>
          </div>

        ) : (
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:px-12 px-5 py-12 '>
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
                  <button onClick={() => navigate('/buy-now', { state: product })} className="bg-pink-600/80 w-full cursor-pointer font-bold hover:bg-pink-600 py-2 text-sm text-white ">
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
