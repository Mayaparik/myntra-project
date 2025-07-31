import { React, useContext, useState } from 'react'
import { Link } from 'react-router-dom'

function Beauty() {
  
  return (
    <div className='relative group lg:py-7 py-3 px-4'>
      <button>BEAUTY</button>
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-50 origin-left rounded"></span>

      <div className='w-fit fixed opacity-0 pointer-events-none lg:group-hover:opacity-100 lg:group-hover:pointer-events-auto transition-opacity duration-600 left-0 top-19 mx-14 '>
        <div className='bg-white px-3  grid grid-cols-5 '>
          <div className='text-sm space-y-3 px-7 py-7 tracking-tight'>
            <ul className='space-y-1'>
              <li className='text-cyan-500 font-bold mb-2'>Makeup</li>
              {
                ["Lipstick", "Lip Gloss", "Lip Liner", "Mascara", "Eyeliner", "Kajal", "Eyeshadow", "Foundation", "Primer", "Concealer", "Compact", "Nail Polish"].map((list, index) => (
                  <li key={index} className='text-gray-600 font-normal hover:text-black hover:font-bold'>
                    <Link>{list}</Link>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className='text-sm space-y-3 px-7 py-7 bg-gray-50 '>
            <ul className='space-y-1'>
              <li className='text-cyan-500 font-bold mb-2  whitespace-nowrap '>Skincare, Bath & Body</li>
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
              <li className='text-cyan-500 font-bold mb-2 whitespace-nowrap'>Bady Care</li>
            </ul>
            <ul >
              <li className='text-cyan-500 font-bold mb-2 whitespace-nowrap'>Masks</li>
            </ul>
          </div>
          <div className='text-sm space-y-3 px-7 py-7'>
            <ul className='space-y-1'>
              <li className='text-cyan-500 font-bold mb-2 whitespace-nowrap'>Haircare</li>
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
              <li className='text-cyan-500 font-bold mb-2 whitespace-nowrap cursor-pointer'>Fragrance</li>
              {
                ["Perfume", "Deodrant", "Body Mist"].map((list, index) => (
                  <li key={index} className='text-gray-600 font-normal whitespace-nowrap hover:text-black hover:font-bold'>
                    <Link>{list}</Link>
                  </li>
                ))
              }
            </ul>

          </div>
          <div className='text-sm space-y-3 px-7 py-7 bg-gray-50'>
            <ul className='space-y-1'>
              <li className='text-cyan-500 font-bold mb-2 whitespace-nowrap'>Appliances</li>
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
              <li className='text-cyan-500 font-bold mb-2 whitespace-nowrap'>Men's Grooming</li>
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
              <li className='text-cyan-500 font-bold mb-2 whitespace-nowrap'> Beauty Gift & Makeup set</li>
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
              <li className='text-cyan-500 font-bold mb-2 whitespace-nowrap'>Premium Beauty</li>
            </ul>
            <ul >
              <li className='text-cyan-500 font-bold mb-2 whitespace-nowrap'>Wallenss Hygiene</li>
            </ul>
          </div>
          <div className='text-sm space-y-3 px-7 py-7'>
            <ul className='space-y-1'>
              <li className='text-cyan-500 font-bold mb-2 whitespace-nowrap'>Top Brands</li>
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
    </div>
  )
}

export default Beauty
