import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function MenMobile() {

    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => setIsOpen(!isOpen)


    return (
        <div>
            <div className={`flex justify-between items-center px-2 ${isOpen ? "bg-pink-600/80" : "bg-white"}`} onClick={toggleDropdown}>
                <button className='py-2'>Men</button>
                <p><i class="bi bi-chevron-down"></i></p>
            </div>
            {
                isOpen && (
                    <div className=' transition-all duration-300  overflow-scroll  ' style={{ scrollbarWidth: "none" }}>
                        <div className='bg-white text-left space-y-2 py-2 grid grid-cols-1 px-2'>
                            <div className='text-sm space-y-3 '>
                                <ul className='space-y-1'>
                                    <li className='text-pink-600/80 font-bold mb-2 whitespace-nowrap'>TopWear</li>
                                    {
                                        ["T-Shirt", "Casual Shirts", "Formal Shirts", "Sweatshirts", "Sweaters", "Jackets", "Blazers & Coats", "Suits", "Rain Jackets"].map((list, index) => (
                                            <li key={index} className='text-gray-600 whitespace-nowrap font-normal hover:text-black hover:font-bold'>
                                                <Link>{list}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                                <hr className='text-gray-300' />
                                <ul className='space-y-1'>
                                    <li className='text-pink-600/80 font-bold mb-2'>Indian & Festive Wears</li>
                                    {
                                        ["Kurtas & Kurta Sets", "Sherwanis", "Nehru Jackets", "Dhotis"].map((list, index) => (
                                            <li key={index} className='text-gray-600 font-normal hover:text-black hover:font-bold'>
                                                <Link>{list}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className='text-sm space-y-3  '>
                                <ul className='space-y-1'>
                                    <li className='text-pink-600/80 font-bold mb-2  whitespace-nowrap '>BottomWear</li>
                                    {
                                        ["Jeans", "Casual trousers", "Formal Trousers", "Short", "Track Pants & Joggers"].map((list, index) => (
                                            <li key={index} className='text-gray-600 whitespace-nowrap  font-normal hover:text-black hover:font-bold'>
                                                <Link>{list}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                                <hr className='text-gray-300' />
                                <ul className='space-y-1'>
                                    <li className='text-pink-600/80 font-bold mb-2 whitespace-nowrap'>Innerwear & Sleepwear</li>
                                    {
                                        ["Briefs & Trunks", "Boxers", "Vests", "Sleepwear & Loungewear", "Thermals"].map((list, index) => (
                                            <li key={index} className='text-gray-600 font-normal whitespace-nowrap hover:text-black hover:font-bold'>
                                                <Link>{list}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                                <hr className='text-gray-300' />
                                <ul>
                                    <li className='text-pink-600/80 font-bold mb-2 whitespace-nowrap'>Plus Size</li>
                                </ul>
                            </div>
                            <div className='text-sm space-y-3 '>
                                <ul className='space-y-1'>
                                    <li className='text-pink-600/80 font-bold mb-2 whitespace-nowrap'>Footwear</li>
                                    {
                                        ["Casual Shoes", "Sports Shoes", "Formal Shoes", "Sneakers", "Sandals & Floates", "Flip Flops", "Socks"].map((list, index) => (
                                            <li key={index} className='text-gray-600 font-normal hover:text-black hover:font-bold'>
                                                <Link>{list}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                                <hr className='text-gray-300' />
                                <ul>
                                    <li className='text-pink-600/80 font-bold mb-2 whitespace-nowrap'>Personal Care & Grooming</li>
                                </ul>
                                <ul>
                                    <li className='text-pink-600/80 font-bold mb-2 whitespace-nowrap'>Sunglasses & Frames</li>
                                </ul>
                                <ul>
                                    <li className='text-pink-600/80 font-bold mb-2 whitespace-nowrap'>Watches</li>
                                </ul>
                            </div>
                            <div className='text-sm space-y-3  '>
                                <ul className='space-y-1'>
                                    <li className='text-pink-600/80 font-bold mb-2 whitespace-nowrap'>Sports & Active Wear</li>
                                    {
                                        ["Sports Shoes", "Sports Sandals", "Active T-Shirts", "Track Pants & Shorts", "TrackSuits", "Jackets & Sweatshirts", "Sports Accessories", "Swimmers"].map((list, index) => (
                                            <li key={index} className='text-gray-600 font-normal whitespace-nowrap hover:text-black hover:font-bold'>
                                                <Link>{list}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                                <hr className='text-gray-300' />
                                <ul className='space-y-1'>
                                    <li className='text-pink-600/80 font-bold mb-2 whitespace-nowrap'>Gadgets</li>
                                    {
                                        ["Smart Wearables", "Fitness gadgets", "Headphones", "Spearks"].map((list, index) => (
                                            <li key={index} className='text-gray-600 font-normal whitespace-nowrap hover:text-black hover:font-bold'>
                                                <Link>{list}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className='text-sm space-y-3 '>
                                <ul className='space-y-1'>
                                    <li className='text-pink-600/80 font-bold mb-2'>Fashion Accesserios</li>
                                    {
                                        ["Wallets", "Belts", "Perfumes & Body Mists", "Trimmers", "Deodorants", "Ties, Cufflinks & Pocket Squars", "Accessory Gift Sets", "Caps & Hats", "Mufflers, Scarves & Gloves", "Phone Cases", "Rings & Wristwear", "Helmets"].map((list, index) => (
                                            <li key={index} className='text-gray-600 font-normal hover:text-black hover:font-bold'>
                                                <Link>{list}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                                <hr className='text-gray-300' />
                                <ul >
                                    <li className='text-pink-600/80 font-bold mb-2 whitespace-nowrap'>Bags & Bagpacks</li>
                                </ul>
                                <ul >
                                    <li className='text-pink-600/80 font-bold mb-2 whitespace-nowrap'>Luggages & Trolleys</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default MenMobile
