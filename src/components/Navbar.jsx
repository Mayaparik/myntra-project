import React, { useState, createContext } from 'react'
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

export const MobileViewContext = createContext()

function Navbar() {

    const [isOpen, setIsOpen] = useState(false)
    const { searchTerm, setSearchTerm } = useSearch()
    const [mobileContext, setMobileContext] = useState({ men: false, women: false, kids: false, home: false, beauty: false, gens: false, studio: false })
    console.log(mobileContext);


    return (
        <>
            <MobileViewContext.Provider value={{ mobileContext, setMobileContext }}>
                <header>

                    <div className='flex  justify-between md:px-12 lg:py-0 py-3 px-5 items-center gap-5  fixed w-full z-10 bg-white'>
                        <div className=''>
                            <img src={myntraLogo} alt="" className='w-[60px] ' />
                        </div>
                        <nav className='lg:block hidden'>

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
                        <div className='lg:w-1/3 w-2/3 mx-3'>
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
                        {/* mobile menu */}
                        <div className='lg:hidden '>
                            <button onClick={() => setIsOpen(!isOpen)} className='bg-gray-200 px-2 py- border-2 border-gray-400 rounded-sm text-lg text-gray-400'>
                                {isOpen ? <i className="bi bi-x-lg "></i> : <i className="bi bi-three-dots"></i>}
                            </button>
                        </div>
                    </div>
                    <div>
                        {
                            isOpen && (
                                <div className={`fixed right-0 w-30 top-13 lg:hidden space-y-2 z-10 bg-white text-center overflow-scroll h-full `}>
                                    <div className="flex flex-col text-center lg:text-sm text-xs space-y-1  items-center">

                                        <Profile />
                                        <Link to="/wishlist">
                                            <div className="flex flex-col cursor-pointer px-2 py-2">
                                                <i className="bi bi-heart text-base "></i>
                                                <span className=" font-semibold ">Wishlist</span>
                                            </div>
                                        </Link>
                                        <Link to='/cart'>
                                            <div className="flex flex-col  cursor-pointer px-2 py-2">
                                                <i className="bi bi-bag text-base "></i>
                                                <span className=" font-semibold ">Bag</span>
                                            </div>
                                        </Link>
                                    </div>
                                    <nav >
                                        <div className="className='flex flex-col lg:text-sm text-xs space-y-1 font-semibold  text-black">
                                            <Men />
                                            <Women />
                                            <Kids />
                                            <Home />
                                            <Beauty />
                                            <Gens />
                                            <Studio />
                                        </div>

                                    </nav>
                                </div>
                            )
                        }
                    </div>
                </header>
            </MobileViewContext.Provider>
        </>
    )
}

export default Navbar
