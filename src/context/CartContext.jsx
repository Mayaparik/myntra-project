import {react, createContext, useContext, useState, useEffect } from 'react'
import toast from 'react-hot-toast'

const CartContext = createContext()

export function CartProvider({children}) {
  
    const[cart, setCart] = useState([])


    useEffect(() => {
      const storedCart = localStorage.getItem("cart")
      if(storedCart){
        setCart(JSON.parse(storedCart))
      }
    },[])

    useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    const addToCart = (product) => {
      const  exists = cart.find(item => item.id === product.id)
      if(!exists){
        setCart([...cart, product])
        toast.success('Successfully Added To Bag!')
      } 
    }
    
    const removeFromCart = (id) => {
      setCart(cart.filter(item => item.id !== id))
      toast.error('Removed From Bag!')
    }

    const isInCart = (id) => {
        return cart.some(item => item.id === id)
    }
 
  return (
    <CartContext.Provider value={{addToCart, removeFromCart, isInCart, cart}}>
        {children}
    </CartContext.Provider>
  )
}

export function useCart(){
    return useContext(CartContext)
}


