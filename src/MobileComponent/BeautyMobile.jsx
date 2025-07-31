import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function BeautyMobile() {

    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => setIsOpen(!isOpen)

    return (
        <div>
            <div className={`flex justify-between items-center px-2 ${isOpen ? "bg-pink-600/80" : "bg-white"}`} onClick={toggleDropdown}>
                <button className='py-2'>Beauty</button>
                <p><i class="bi bi-chevron-down"></i></p>
            </div>
            {
                isOpen && (
                    <div className='transition-all duration-300 overflow-scroll' style={{ scrollbarWidth: "none" }}>
                        <div className='bg-white text-left space-y-2 py-2 px-2 grid grid-cols-1 '>
                            <div className='text-sm space-y-3'>
                                <ul className='space-y-1'>
                                    <li className='text-pink-600/80 font-bold mb-2'>Makeup</li>
                                    {
                                        ["Lipstick", "Lip Gloss", "Lip Liner", "Mascara", "Eyeliner", "Kajal", "Eyeshadow", "Foundation", "Primer", "Concealer", "Compact", "Nail Polish"].map((list, index) => (
                                            <li key={index} className='text-gray-600 font-normal hover:text-black hover:font-bold'>
                                                <Link>{list}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className='text-sm space-y-3'>
                                <ul className='space-y-1'>
                                    <li className='text-pink-600/80 font-bold mb-2  whitespace-nowrap '>Skincare, Bath & Body</li>
                                    {
                                        ["Face Moisturiser", "Cleanser", "Masks & Peel", "Sunscreen", "Serum", "Face Wash", "Eye Cream", "Lip Balm", "Body Lotion", "Body Wash", "Body Scrub", "Hand Cream"].map((list, index) => (
                                            <li key={index} className='text-gray-600 whitespace-nowrap  font-normal hover:text-black hover:font-bold'>
                                                <Link>{list}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                                <hr className='text-gray-300' />
                                <ul >
                                    <li className='text-pink-600/80 font-bold mb-2 whitespace-nowrap'>Bady Care</li>
                                </ul>
                                <ul >
                                    <li className='text-pink-600/80 font-bold mb-2 whitespace-nowrap'>Masks</li>
                                </ul>
                            </div>
                            <div className='text-sm space-y-3'>
                                <ul className='space-y-1'>
                                    <li className='text-pink-600/80 font-bold mb-2 whitespace-nowrap'>Haircare</li>
                                    {
                                        ["Shampoo", "Conditioner", "Hair Cream", "Hair Oil", "Hair Gel", "Hair Color", "Hair Serum", "Hair Accessory"].map((list, index) => (
                                            <li key={index} className='text-gray-600 font-normal hover:text-black hover:font-bold'>
                                                <Link>{list}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                                <hr className='text-gray-300' />
                                <ul className='space-y-1'>
                                    <li className='text-pink-600/80 font-bold mb-2 whitespace-nowrap cursor-pointer'>Fragrance</li>
                                    {
                                        ["Perfume", "Deodrant", "Body Mist"].map((list, index) => (
                                            <li key={index} className='text-gray-600 font-normal whitespace-nowrap hover:text-black hover:font-bold'>
                                                <Link>{list}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>

                            </div>
                            <div className='text-sm space-y-3'>
                                <ul className='space-y-1'>
                                    <li className='text-pink-600/80 font-bold mb-2 whitespace-nowrap'>Appliances</li>
                                    {
                                        ["Hair Straightener", "Hair Dryer", "Epilator"].map((list, index) => (
                                            <li key={index} className='text-gray-600 font-normal whitespace-nowrap hover:text-black hover:font-bold'>
                                                <Link>{list}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                                <hr className='text-gray-300' />
                                <ul className='space-y-1'>
                                    <li className='text-pink-600/80 font-bold mb-2 whitespace-nowrap'>Men's Grooming</li>
                                    {
                                        ["Trimmers", "Beard Oil", "Hair Wax"].map((list, index) => (
                                            <li key={index} className='text-gray-600 font-normal whitespace-nowrap hover:text-black hover:font-bold'>
                                                <Link>{list}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                                <hr className='text-gray-300' />
                                <ul className='space-y-1'>
                                    <li className='text-pink-600/80 font-bold mb-2 whitespace-nowrap'> Beauty Gift & Makeup set</li>
                                    {
                                        ["Beauty Gift", "Makeup Kit"].map((list, index) => (
                                            <li key={index} className='text-gray-600 font-normal whitespace-nowrap hover:text-black hover:font-bold'>
                                                <Link>{list}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                                <hr className='text-gray-300' />
                                <ul >
                                    <li className='text-pink-600/80 font-bold mb-2 whitespace-nowrap'>Premium Beauty</li>
                                </ul>
                                <ul >
                                    <li className='text-pink-600/80 font-bold mb-2 whitespace-nowrap'>Wallenss Hygiene</li>
                                </ul>
                            </div>
                            <div className='text-sm space-y-3'>
                                <ul className='space-y-1'>
                                    <li className='text-pink-600/80 font-bold mb-2 whitespace-nowrap'>Top Brands</li>
                                    {
                                        ["Lakme", "Maybelline", "LOreal", "Phillips", "Bath & Body Works", "THE BODY SHOP", "Biotique", "Mamaearth", "MCaffeine", "Nivea", "Lotus Harbles", "LOreal professionnels", "KAMA AYURVEDA", "M.A.C", "Forest Essentials "].map((list, index) => (
                                            <li key={index} className='text-gray-600 font-normal whitespace-nowrap hover:text-black hover:font-bold'>
                                                <Link>{list}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default BeautyMobile
