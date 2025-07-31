import { React, useContext, useState } from 'react'
import { Link } from 'react-router-dom'

function Gens() {

  return (
    <div className='relative group lg:py-7 py-3 px-4'>
      <button >GENS</button>
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-50 origin-left rounded"></span>

      <div className='w-fit fixed opacity-0 pointer-events-none lg:group-hover:opacity-100 lg:group-hover:pointer-events-auto transition-opacity duration-600 left-0 top-19 mx-14 '>
        <div className='bg-white px-3  grid grid-cols-5 '>
          <div className='text-sm space-y-3 px-7 py-7 '>
            <ul className='space-y-1 whitespace-nowrap'>
              <li className='text-cyan-500 font-bold mb-2 '>Women & Western Wear</li>
              {
                ["Dresses Under ₹599", "Tops Under ₹399", "Jeans Under ₹599", "Trounsers Under ₹699", " T-Shirts Under ₹299", "Shirts Under ₹499", "Skirts Under ₹499", "Shorts Under ₹699", "Co-ords Under ₹799", "Jumpsuits Under ₹899", "Track Pants Under ₹699", "Jackets Under ₹ 899", "Sweatshirts under ₹699", "Sweaters Under ₹899"].map((list, index) => (
                  <li key={index} className='text-gray-600 font-normal whitespace-nowrap hover:text-black hover:font-bold'>
                    <Link>{list}</Link>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className='text-sm space-y-3 px-8 py-7 bg-gray-50 '>
            <ul className='space-y-1 whitespace-nowrap'>
              <li className='text-cyan-500 font-bold mb-2  whitespace-nowrap '>Women's Ethnic Wear</li>
              {
                ["Kurtas Under ₹399", "Kurtis Under ₹499", "Kurti sets Under ₹499", "Ethnic Dress Under ₹799", "Plazzos Under ₹799"].map((list, index) => (
                  <li key={index} className='text-gray-600 font-normal whitespace-nowrap hover:text-black hover:font-bold'>
                    <Link>{list}</Link>
                  </li>
                ))
              }
            </ul>
            <hr className='text-gray-300' />
            <ul >
              <li className='text-cyan-500 font-bold mb-2 whitespace-nowrap'>Lingeries & Loungewear</li>
              {
                ["Bras Under ₹399", "Night Suits Under ₹799", "Nightdresses Under ₹999", "Lounge Pants Under ₹999", "Briefs Under ₹599"].map((list, index) => (
                  <li key={index} className='text-gray-600 font-normal hover:text-black hover:font-bold'>
                    <Link>{list}</Link>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className='text-sm space-y-3 px-8 py-7'>
            <ul className='space-y-1'>
              <li className='text-cyan-500 font-bold mb-2 whitespace-nowrap'>Men's Casual Wear</li>
              {
                ["T-Shirts Under ₹299", "Shirts Under ₹499", "Jeans Under ₹599", "Trounsers Under ₹699", "Shorts Under ₹599", "Track Pants Under ₹699", "Jackets Under ₹ 899", "Sweatshirts under ₹699", "Sweaters Under ₹999", "Co-ords Under ₹799"].map((list, index) => (
                  <li key={index} className='text-gray-600 font-normal hover:text-black hover:font-bold'>
                    <Link>{list}</Link>
                  </li>
                ))
              }
            </ul>
            <hr className='text-gray-300' />
            <ul className='space-y-1'>
              <li className='text-cyan-500 font-bold mb-2 whitespace-nowrap cursor-pointer'>Men's Occasions Wear</li>
              {
                ["Kurtas Under ₹799", "Kurta sets Under ₹999"].map((list, index) => (
                  <li key={index} className='text-gray-600 font-normal hover:text-black hover:font-bold'>
                    <Link>{list}</Link>
                  </li>
                ))
              }
            </ul>

          </div>
          <div className='text-sm space-y-3 px-8 py-7 bg-gray-50'>
            <ul className='space-y-1 '>
              <li className='text-cyan-500 font-bold mb-2 whitespace-nowrap'>Women's Footwear</li>
              {
                ["Heels Under ₹599", "Flats Under ₹499", "Casual Shoes Under ₹699", "Sports Shoes Under ₹999", "Flip Flop Under ₹799", "Boots Under ₹999", "Balleniras Under ₹799"].map((list, index) => (
                  <li key={index} className='text-gray-600 whitespace-nowrap font-normal hover:text-black hover:font-bold'>
                    <Link>{list}</Link>
                  </li>
                ))
              }
            </ul>
            <hr className='text-gray-300' />
            <ul className='space-y-1'>
              <li className='text-cyan-500 font-bold mb-2 whitespace-nowrap'>Men's Footwear</li>
              {
                ["Casual Shoes Under ₹799", "Sports Shoes Under ₹999", "Formal Shoes Under ₹999", "Sandals Under ₹799", "Flip Flop Under ₹499", "Boots Under ₹999"].map((list, index) => (
                  <li key={index} className='text-gray-600 font-normal whitespace-nowrap hover:text-black hover:font-bold'>
                    <Link>{list}</Link>
                  </li>
                ))
              }
            </ul>

          </div>
          <div className='text-sm space-y-3 px-8 py-7'>
            <ul className='space-y-1'>
              <li className='text-cyan-500 font-bold mb-2 whitespace-nowrap'>Beauty & Grooming</li>
              {
                ["Skincare Under ₹299", "Haircare Under ₹399", "Bath & Body Under ₹399", "Makeup Under ₹299", "Fragrance Under ₹399", "Appliances Under ₹999"].map((list, index) => (
                  <li key={index} className='text-gray-600 font-normal whitespace-nowrap hover:text-black hover:font-bold'>
                    <Link>{list}</Link>
                  </li>
                ))
              }
            </ul>
            <hr className='text-gray-300' />
            <ul className='space-y-1'>
              <li className='text-cyan-500 font-bold mb-2 whitespace-nowrap'>Accessories </li>
              {
                ["Jewellery Under ₹299", "Handbags Under ₹499", "Cluthes Under ₹999", "Backpacks Under ₹699", "Wallets Under ₹499", "Sunglasses Under ₹699", "Belts Under ₹799", "Caps Under ₹899"].map((list, index) => (
                  <li key={index} className='text-gray-600 font-normal hover:text-black hover:font-bold'>
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

export default Gens
