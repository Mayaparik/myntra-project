import React, { useState, useEffect, useRef } from 'react'
import myntraLogo from '../assets/myntraLogo.png'
import { Link } from 'react-router-dom'
import Men from '../dropdown/Men'
import Women from '../dropdown/Women'
import Kids from '../dropdown/Kids'
import Home from '../dropdown/Home'
import Beauty from '../dropdown/Beauty'
import Gens from '../dropdown/Gens'
import Studio from '../dropdown/Studio'
import Profile from '../dropdown/Profile'
import { useSearch } from '../context/SearchContext'
import MenMobile from '../MobileComponent/MenMobile'
import WomenMobile from '../MobileComponent/WomenMobile'
import HomeMobile from '../MobileComponent/HomeMobile'
import BeautyMobile from '../MobileComponent/BeautyMobile'
import KidsMobile from '../MobileComponent/KidsMobile'
import ProfileMobile from '../MobileComponent/ProfileMobile'


function Navbar() {

    const [isOpen, setIsOpen] = useState(false)
    const { searchTerm, setSearchTerm } = useSearch()
    const sidebarRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.addEventListener('mousedown', handleClickOutside)
        }
    }, [isOpen])

    return (
        <>
            <header>
                <div className='lg:block hidden'>
                    <div className='flex justify-between md:px-12 lg:py-0 py-3 px-5 items-center gap-5  fixed w-full z-10 bg-white'>
                        <div className=''>
                            <img src={myntraLogo} alt="" className='w-[60px] ' />
                        </div>
                        <nav>
                            <div className="flex justify-between  text-sm font-semibold text-black">
                                <Men />
                                <Women />
                                <Kids />
                                <Home />
                                <Beauty />
                                <Gens />
                                <Studio />
                            </div>
                        </nav>
                        <div className='lg:w-1/3 w-2/3 mx-3 '>
                            <div className="relative ">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                                    <i className="bi bi-search"></i>
                                </span>
                                <input
                                    type="text"
                                    placeholder="Search products, brands and more"
                                    className="w-full pl-10 pr-4 py-2 bg-gray-100 text-sm rounded-sm focus:bg-white focus:outline-none focus:border focus:border-gray-300"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
                                />
                            </div>
                        </div>
                        <div className='lg:block hidden order-4'>
                            <div className="flex justify-center text-center items-center">
                                <Profile />
                                <Link to='/wishlist'>
                                    <div className="flex flex-col items-center text-black cursor-pointer px-2">
                                        <i className="bi bi-heart text-base "></i>
                                        <span className="text-sm font-semibold ">Wishlist</span>
                                    </div>
                                </Link>
                                <Link to='/cart'>
                                    <div className="flex flex-col items-center text-black cursor-pointer px-2">
                                        <i className="bi bi-bag text-base "></i>
                                        <span className="text-sm font-semibold ">Bag</span>
                                    </div>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
                {/* mobile view */}
                <div className='lg:hidden block'>
                    <div className='fixed items-center w-full z-10 bg-white'>
                        <div className='py-3 px-5 shadow-sm shadow-gray-200 bg-white'>
                            <div className='flex justify-between '>
                                <div className='flex space-x-4 items-center'>
                                    <div className='lg:hidden '>
                                        <button onClick={() => setIsOpen(!isOpen)} className='text-4xl text-black items-center'>
                                            {isOpen ? <i className="bi bi-list text-gray-500"></i> : <i className="bi bi-list"></i>}
                                        </button>
                                    </div>
                                    <div>
                                        <img src={myntraLogo} alt="" className='w-[45px] ' />
                                    </div>
                                </div>
                                <div className='flex justify-end space-x-6 items-center'>
                                    <Link to='/wishlist'>
                                        <div className=" items-center text-black cursor-pointer ">
                                            <i className="bi bi-heart text-2xl "></i>
                                        </div>
                                    </Link>
                                    <Link to='/cart'>
                                        <div className=" items-center text-black cursor-pointer ">
                                            <i className="bi bi-bag text-2xl "></i>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='py-4 px-5'>
                            <div className="relative ">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                                    <i className="bi bi-search"></i>
                                </span>
                                <input
                                    type="text"
                                    placeholder="Search for brands and products"
                                    className="w-full pl-10  pr-4 py-2 bg-white shadow-md shadow-gray-200 text-sm rounded-full focus:bg-white focus:outline-none border border-gray-300 focus:border focus:border-gray-500"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {
                        isOpen && (
                            <div ref={sidebarRef} className={`fixed left-0 w-60 top-14 lg:hidden space-y-2 z-10 px-3 bg-white text-left overflow-scroll h-full `} style={{ scrollbarWidth: "none" }}>
                                <nav >
                                    <div className="flex flex-col lg:text-sm  py-3 text-sm  font-semibold  text-black">
                                        <MenMobile />
                                        <WomenMobile />
                                        <KidsMobile />
                                        <HomeMobile />
                                        <BeautyMobile />
                                    </div>
                                    <hr className='text-gray-300' />
                                    <div className='flex flex-col text-sm text-gray-500 space-y-5  pt-4 px-2'>
                                        <ProfileMobile />
                                        <Link className='hover:text-black hover:font-bold'>Myntra Studio</Link>
                                        <Link className='hover:text-black hover:font-bold'>Myntra Mall</Link>
                                        <Link className='hover:text-black hover:font-bold'>Myntra Insider</Link>
                                        <Link className='hover:text-black hover:font-bold'>Gift cards</Link>
                                        <Link className='hover:text-black hover:font-bold'>Contact Us</Link>
                                        <Link className='hover:text-black hover:font-bold'>FAQs</Link>
                                        <Link className='hover:text-black hover:font-bold'>Legal</Link>
                                    </div>
                                </nav>
                            </div>
                        )
                    }
                </div>
            </header>

        </>
    )
}

export default Navbar
