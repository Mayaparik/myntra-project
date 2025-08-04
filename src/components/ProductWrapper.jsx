import React from 'react'
import { useWishlist } from '../context/WishlistContext'
import { useCart } from '../context/CartContext'

function ProductWishlistWrapper({ product, children }) {
    const { wishlist, addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()

    const { cart, addToCart, removeFromCart, isInCart } = useCart()

   
    const toggleWishlist = () => {
        if (isInWishlist(product.id)) {
            removeFromWishlist(product.id)
        } else {
            addToWishlist(product)
        }
    }

    const toggleCart = () => {
        if (isInCart(product.id)) {
            removeFromCart(product.id)
        } else {
            addToCart(product)
        }
    }

    return (
        <div className='space-y-4  inline'>
            {children}
            <button onClick={toggleCart} className="bg-pink-600/80  cursor-pointer font-semibold hover:bg-rose-400 py-3 text-white w-full rounded-sm">
                {isInCart(product.id) ? '🛒 ADDED' : '➕ ADD TO BAG'}
            </button>
            <button onClick={toggleWishlist} className="border border-gray-300 cursor-pointer hover:border-black rounded-sm font-bold text-gray-700 tracking-wide  py-3  w-full">
                {isInWishlist(product.id) ? "💙 WISHLIST" : "🤍WISHLIST"}
            </button>
        </div>
    )
}

export default ProductWishlistWrapper
