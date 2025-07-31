import { React, useContext, useState } from 'react'
import { Link } from 'react-router-dom'

function Profile() {

    return (
        <div className='relative group flex flex-col items-center text-black cursor-pointer px-3 py-4'>
            <i className="bi bi-person-circle text-base"></i>
            <button className="text-sm font-semibold">Profile</button>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded"></span>
            <div className=' fixed opacity-0 pointer-events-none lg:group-hover:opacity-100 lg:group-hover:pointer-events-auto transition-opacity duration-600 top-19'>
                <div className='bg-white py-7 pl-5 pr-12 text-left text-sm space-y-3'>
                    <div className=''>
                        <p className='font-bold'>Welcome</p>
                        <p className='text-gray-600'>To access account and manage orders</p>
                        <button className='px-3 py-2 border border-gray-300 my-2 font-bold rounded-xs hover:border-pink-500 text-pink-500'><Link to='/signup'>LOGIN/SIGNUP</Link></button>
                    </div>
                    <hr className='text-gray-300' />
                    <ul className='space-y-1 text-gray-600 font-normal '>
                        {/* {
                            ["Orders", "Wishlist", "Gift Cards", "Contact Us", "Myntra Insider"].map((list, index) => (
                                ))
                                } */}
                        <li className=' whitespace-nowrap  hover:text-black hover:font-bold' >Orders</li>
                        <li className=' whitespace-nowrap  hover:text-black hover:font-bold' ><Link to='/wishlist'>Wishlist</Link></li>
                        <li className=' whitespace-nowrap  hover:text-black hover:font-bold' >Gift Cards</li>
                        <li className=' whitespace-nowrap  hover:text-black hover:font-bold' >Contact Us</li>
                        <li className=' whitespace-nowrap  hover:text-black hover:font-bold' >Myntra Insider</li>
                    </ul>
                    <hr className='text-gray-300' />
                    <ul className='space-y-1'>
                        {
                            ["Myntra Credit", "Coupons", "Saved Cards", "Saved VPA", "Saved Addresses"].map((list, index) => (
                                <li key={index} className='text-gray-600 whitespace-nowrap  font-normal hover:text-black hover:font-bold' >{list}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Profile
