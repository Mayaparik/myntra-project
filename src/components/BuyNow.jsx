import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useLocation } from 'react-router-dom'

function BuyNow() {

    const { state: product } = useLocation()
    const [placed, setPlaced] = useState(false)
    const [showThankYou, setShowThankYou] = useState(false)
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [pincode, setPincode] = useState("")
    const [mobile, setMobile] = useState("")
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [state, setState] = useState("")

    const isFormValid = fullname && email && pincode && mobile && city && country && state

    useEffect(() => {
        const fullname = localStorage.getItem("fullname")
        const mobile = localStorage.getItem("mobile")
        const city = localStorage.getItem("city")
        const email = localStorage.getItem("email")
        const pincode = localStorage.getItem("pincode")
        const state = localStorage.getItem("state")
        const country = localStorage.getItem("country")

        if (fullname) setFullname(fullname)
        if (mobile) setMobile(mobile)
        if (city) setCity(city)
        if (email) setEmail(email)
        if (pincode) setPincode(pincode)
        if (state) setState(state)
        if (country) setCountry(country)

    }, [])

    function handlePlaceOrder(e) {
        e.preventDefault()

        localStorage.setItem("fullname", fullname)
        localStorage.setItem("mobile", mobile)
        localStorage.setItem("city", city)
        localStorage.setItem("state", state)
        localStorage.setItem("pincode", pincode)
        localStorage.setItem("email", email)
        localStorage.setItem("country", country)

        if (!isFormValid) {
            toast.error("Please fill every fields")
            return
        }

        setShowThankYou(true)
        setPlaced(true)

        setTimeout(() => {
            setShowThankYou(false)
        }, 5000)

    }

    if (!product) return <p>No Product Found</p>

    return (
        <div>

            <div className="grid md:grid-cols-3 grid-cols-1 space-x-5 space-y-5 pt-25 lg:px-12 px-5 items-center ">
                <div className=''>
                    <img src={product.images?.[0]} alt="" className="w-full  rounded" />
                </div>
                <div className='space-y-2'>
                    <h1 className="text-xl font-bold mt-4">{product.title}</h1>
                    <p className="text-lg mt-2 font-bold">${product.price}</p>
                    <hr className='text-gray-100' />
                    <h1 className='text-lg font-semibold'>Product Details</h1>
                    <p className="text-gray-600 line-clamp-3">{product.description}</p>
                    <p className='font-semibold'>In stock: {product.stock}{" "}available</p>
                    <p className="text-sm ">{product.returnPolicy}</p>
                </div>
                <div>
                    <form onSubmit={handlePlaceOrder} action="" className='bg-pink-50 rounded-md px-5 py-7 space-y-4 '>

                        <input value={fullname} onChange={(e) => setFullname(e.target.value)} type="text" placeholder='Full name' className='bg-pink-500 rounded-2xl text-white focus:outline-none border-none ps-3 py-1 w-full' />
                        <input value={mobile} onChange={(e) => setMobile(e.target.value)} type="text" placeholder='Mobile Number' className='bg-pink-500 rounded-2xl text-white focus:outline-none border-none ps-3 py-1 w-full' />
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email Address' className='bg-pink-500 rounded-2xl text-white focus:outline-none border-none ps-3 py-1 w-full' />
                        <div className='flex gap-4'>
                            <input value={city} onChange={(e) => setCity(e.target.value)} type="text" placeholder='City' className='bg-pink-500  rounded-2xl text-white focus:outline-none border-none ps-3 py-1 w-2/3' />
                            <input value={pincode} onChange={(e) => setPincode(e.target.value)} type="text" placeholder='Pincode' className='bg-pink-500 rounded-2xl text-white focus:outline-none border-none ps-3 py-1 w-1/3' />
                        </div>
                        <div className='flex gap-4'>
                            <input value={state} onChange={(e) => setState(e.target.value)} type="text" placeholder='State' className='bg-pink-500  rounded-2xl text-white focus:outline-none border-none ps-3 py-1 w-1/2' />
                            <input value={country} onChange={(e) => setCountry(e.target.value)} type="text" placeholder='Country' className='bg-pink-500 rounded-2xl text-white focus:outline-none border-none ps-3 py-1 w-1/2' />
                        </div>

                        <button type='submit' disabled={!isFormValid} className={`text-white mt-4 py-2 w-full rounded-lg ${isFormValid ? "bg-pink-600/80" : "bg-pink-400 cursor-not-allowed"}`}>
                            {placed ? "✅ Order Placed" : "Place Order"}
                        </button>
                    </form>
                </div>
            </div>
            {
                showThankYou && (
                    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 transition-opacity duration-500">
                        <div className="text-center text-white ">
                            <h1 className="text-4xl font-bold mb-4">🎉 Thank You!</h1>
                            <p className="text-lg">Your order has been placed successfully.</p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default BuyNow
