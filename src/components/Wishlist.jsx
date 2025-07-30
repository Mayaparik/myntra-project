import React from 'react'
import { useWishlist } from '../context/WishlistContext'
import { Link } from 'react-router-dom'
import wishlistImage from '../assets/wishlistImage.png'

function Wishlist() {

  const { wishlist, removeFromWishlist } = useWishlist()

  return (
    <div >
      <h1 className='text-2xl font-bold mb-6'>Wishlist</h1>
      {
        wishlist.length === 0 ? (
          <div className='lg:px-12 px-5 py-12 bg-pink-600/80 h-screen my-auto '>
            <div className='bg-white max-w-xs rounded-lg m-auto h-90 text-center flex flex-col '>
                 <img src={wishlistImage} alt="" className='w-full ' />
               <Link to='/' className='w-50 bg-pink-500/90 text-white mx-auto py-2 hover:bg-pink-600   '>START SHOPPING</Link>
            </div>
          </div>
          
        ) : (
          <div className='grid grid-cols-2 md:grid-cols-5 gap-4 lg:px-12 px-5 py-12 '>
            {
              wishlist.map((product) => (
                <div key={product.id} className="hover:bg-white hover:shadow-md relative">
                  <img src={product.thumbnail || product.images?.[0]} alt="" className='w-full object-cover' />
                  <div className=' py-2 space-y-1'>
                    <p className='font-bold'>{product.category.name}</p>
                    <p className='font-bold'>{product.tags?.[0]}</p>
                    <p className="text-sm line-clamp-1 text-gray-600">{product.title}</p>
                    <p className='font-bold text-sm'>${product.price}</p>
                  </div>
                  <button onClick={() => removeFromWishlist(product.id)} className=" bottom-0 bg-pink-500/90 w-full text-xs font-bold hover:bg-pink-600 py-2 text-white">REMOVE FROM WISHLIST</button>
                </div>
              ))
            }
          </div>
        )
      }
    </div>
  )
}

export default Wishlist
