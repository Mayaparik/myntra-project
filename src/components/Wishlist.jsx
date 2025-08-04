import React from 'react'
import { useWishlist } from '../context/WishlistContext'
import { Link } from 'react-router-dom'
import wishlistImage from '../assets/wishlistImage.png'

function Wishlist() {

  const { wishlist, removeFromWishlist } = useWishlist()

  return (
    <div className='lg:pt-10 pt-25 bg-white'>
      {
        wishlist.length === 0 ? (
            <div className='max-w-sm rounded-lg m-auto text-center flex flex-col pt-10  space-y-2'>
                 <img src={wishlistImage} alt="" className='md:w-70 w-40 mx-auto' />
                 <p className='font-bold text-xl'>Your wishlist is empty</p>
                 <p className='text-sm'>Create your first wishlist request</p>
               <Link to='/' className='w-50 tracking-wider text-white font-semibold mx-auto py-2 bg-pink-600/80 '>+ Create New Wish</Link>
            </div>
          
        ) : (
          <div className='grid grid-cols-2 md:grid-cols-5 sm:grid-cols-3 gap-4 lg:px-12 px-5 py-12 '>
            {
              wishlist.map((product) => (
                <div key={product.id} className="hover:bg-white hover:shadow-md relative">
                  <img src={product.thumbnail || product.images?.[0]} alt="" className='w-full ' />
                  <div className='py-2 space-y-1'>
                    <p className='font-bold md:text-base text-sm'>{product.category.name}</p>
                    <p className='font-bold md:text-base text-sm'>{product.tags?.[0]}</p>
                    <p className="md:text-sm text-sm line-clamp-1 text-gray-600">{product.title}</p>
                    <p className='font-bold text-sm'>${product.price}</p>
                  </div>
                  <button onClick={() => removeFromWishlist(product.id)} className="bottom-0 bg-pink-500/90 w-full text-xs font-bold hover:bg-pink-600 py-2 text-white">REMOVE FROM WISHLIST</button>
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
