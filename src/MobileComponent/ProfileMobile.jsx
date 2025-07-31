import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function ProfileMobile() {

    const [isOpen, setIsOpen] = useState(false)

    const toggleProfile = () => setIsOpen(!isOpen)

    return (
        <>
            <div className='relative group flex justify-between items-center text-black cursor-pointer ' onClick={toggleProfile}>
                <button className="text-sm font-semibold">Profile</button>
                <i className="bi bi-person-circle text-base"></i>
            </div>
            {
                isOpen && (
                    <div className='transition-all duration-600 overflow-scroll' style={{scrollbarWidth: "none"}}>
                        <div className='bg-white text-left text-sm space-y-3'>
                            <div className=''>
                                <p className='font-bold'>Welcome</p>
                                <p className='text-gray-600 text-xs'>To access account and manage orders</p>
                                <button className={`px-3 py-2 border my-2 font-bold rounded-xs bg-pink-600/80 text-white`}><Link to='/signup'>LOGIN/SIGNUP</Link></button>
                            </div>
                            <hr className='text-gray-300' />
                            
                            </div>
                    </div>
                )
            }
        </>
    )
}

export default ProfileMobile
