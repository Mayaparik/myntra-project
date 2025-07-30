import React from 'react'
import { Link } from 'react-router-dom'
import apple from '../assets/apple.png'
import google from '../assets/google.png'

function Footer() {
    
    return (
        <div className='grid md:grid-cols-3 grid-cols-1 lg:px-24 md:px-12 px-5 py-10 bg-gray-50 mt-15 text-left text-sm gap-10'>
            <div className='grid grid-cols-2  space-y-4'>
                <nav className='space-y-4'>
                    <ul className=' text-gray-500 '>
                        <li className='first:text-black font-bold mb-5 whitespace-nowrap'><Link>ONLINE SHOPPING </Link></li>
                        {
                            ["Men", "Women", "Kids", "Beauty", "Gens", "Gift Cards", "Myntra Insider"].map((list, index) => (
                                <li key={index} className='cursor-pointer'><Link>{list}</Link></li>
                            ))
                        }
                    </ul>
                    <ul className=' text-gray-500 space-y-2'>
                        <li className='first:text-black font-bold mb-5 whitespace-nowrap'><Link>USEFUL LINKS </Link> </li>
                        {
                            ["Blog", "Careers", "Site Map", "Corporate Information", "Whitehat"].map((list, index) => (
                                <li key={index} className='cursor-pointer'><Link>{list}</Link></li>
                            ))
                        }
                    </ul>
                </nav>
                <nav>
                    <ul className=' text-gray-500 space-y-2'>
                        <li className='first:text-black font-bold mb-5 whitespace-nowrap'><Link>CUSTOMER POLICIES </Link> </li>
                        {
                            ["Contact Us", "T&C", "Terms Of Use", "Track Orders", "Cancellation", "Return", "Privacy Policy", "Grievance Officer"].map((list, index) => (
                                <li key={index} className='cursor-pointer'><Link>{list}</Link></li>
                            ))
                        }
                    </ul>
                </nav>

            </div>
            <div className='space-y-5 space-x-3 lg:order-3 order-4'>
                <p className='font-bold '>EXPERIENCE MYNTRA APP ON MOBILE</p>
                <div className="flex gap-3 ">
                    <button className='cursor-pointer'>
                        <img src={google} alt="Google Play" className="w-32 rounded-sm" />
                    </button>
                    <button className='cursor-pointer'>
                        <img src={apple} alt="App Store" className="w-32 rounded-sm" />
                    </button>
                </div>
                <p className='font-bold mb-2'>KEEP IN TOUCH</p>
                <i className="bi bi-facebook text-2xl text-gray-500"></i>
                <i className="bi bi-twitter text-2xl text-gray-500"></i>
                <i className="bi bi-youtube text-2xl text-gray-500"></i>
                <i className="bi bi-instagram text-2xl text-gray-500"></i>
            </div>
            <div className='text-base space-y-5 lg:order-4 order-3'>
                <div className='flex justify-start gap-3 items-center'>
                    <i className="bi bi-patch-check-fill text-4xl text-blue-"></i>
                    <p className=''><span className='font-bold'>100% ORIGINAL </span> guarantee for all products at myntra.com</p>
                </div>
                <div className='flex justify-start gap-3'>
                    <i className="bi bi-repeat text-4xl"></i>
                    <p><span className='font-bold'>Return within 14days</span> of receiving your order</p>
                </div>
            </div>

        </div>
    )
}

export default Footer
