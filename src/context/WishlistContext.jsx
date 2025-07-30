import { createContext, useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const WishlistContext = createContext();

export function WishlistProvider({ children }) {

    const [wishlist, setWishlist] = useState([])

    useEffect(() => {
       const stored = localStorage.getItem("wishlist")
       if(stored) {
        setWishlist(JSON.parse(stored))
       }
    },[])

    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlist))
    },[wishlist])

    const addToWishlist = (product) => {
        const exists = wishlist.find((item) => item.id === product.id)

        if (!exists) {
            setWishlist([...wishlist, product])
            toast.success('Successfully Added To Wishlist!')
        } 
        
    }
    const removeFromWishlist = (id) => {
        setWishlist(wishlist.filter(item => item.id !== id))
        toast.error('Removed From Wishlist!')

    }

    const isInWishlist = (id) => wishlist.some(item => item.id === id)


    return (
        <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist }}>
            {children}
        </WishlistContext.Provider>
    )

}
export function useWishlist() {
    return useContext(WishlistContext)
}



