import { React, useContext } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MobileViewContext } from '../components/Navbar';


function Men() {

  const { mobileContext, setMobileContext } = useContext(MobileViewContext)


  function testing(title) {
    
    let filterData = {}

    for (let key in mobileContext) {
      if (key === title) {
        filterData[key] = !mobileContext[key]
      } else {
        filterData[key] = false
      }
    }
  setMobileContext(filterData)
    
  }

  return (
    <div className='relative group lg:py-7 py-3 px-4'
    >
      <button onClick={() => testing("men")}>MEN</button>
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-50 origin-left rounded"></span>

      <div className='w-fit fixed  opacity-0 pointer-events-none lg:group-hover:opacity-100 lg:group-hover:pointer-events-auto transition-opacity duration-600 left-0 top-[76px] mx-14 '>
        <div className='bg-white px-3  grid grid-cols-5 '>
          <div className='text-sm space-y-3  px-7 py-4'>
            <ul className='space-y-1'>
              <li className='text-red-500 font-bold mb-2 whitespace-nowrap'>TopWear</li>
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
              <li className='text-red-500 font-bold mb-2'>Indian & Festive Wears</li>
              {
                ["Kurtas & Kurta Sets", "Sherwanis", "Nehru Jackets", "Dhotis"].map((list, index) => (
                  <li key={index} className='text-gray-600 font-normal hover:text-black hover:font-bold'>
                    <Link>{list}</Link>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className='text-sm space-y-3 px-7 py-4 bg-gray-50'>
            <ul className='space-y-1'>
              <li className='text-red-500 font-bold mb-2  whitespace-nowrap '>BottomWear</li>
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
              <li className='text-red-500 font-bold mb-2 whitespace-nowrap'>Innerwear & Sleepwear</li>
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
              <li className='text-red-500 font-bold mb-2 whitespace-nowrap'>Plus Size</li>
            </ul>
          </div>
          <div className='text-sm space-y-3 px-7 py-4'>
            <ul className='space-y-1'>
              <li className='text-red-500 font-bold mb-2 whitespace-nowrap'>Footwear</li>
              {
                ["Casual Shoes", "Sports Shoes", "Formal Shoes", "Sneakers", "Sandals & Floaters", "Flip Flops", "Socks"].map((list, index) => (
                  <li key={index} className='text-gray-600 font-normal hover:text-black hover:font-bold'>
                    <Link>{list}</Link>
                  </li>
                ))
              }
            </ul>
            <hr className='text-gray-300' />
            <ul>
              <li className='text-red-500 font-bold mb-2 whitespace-nowrap'>Personal Care & Grooming</li>
            </ul>
            <ul>
              <li className='text-red-500 font-bold mb-2 whitespace-nowrap'>Sunglasses & Frames</li>
            </ul>
            <ul>
              <li className='text-red-500 font-bold mb-2 whitespace-nowrap'>Watches</li>
            </ul>
          </div>
          <div className='text-sm space-y-3 px-7 py-4 bg-gray-50'>
            <ul className='space-y-1'>
              <li className='text-red-500 font-bold mb-2 whitespace-nowrap'>Sports & Active Wear</li>
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
              <li className='text-red-500 font-bold mb-2 whitespace-nowrap'>Gadgets</li>
              {
                ["Smart Wearables", "Fitness gadgets", "Headphones", "Speareks"].map((list, index) => (
                  <li key={index} className='text-gray-600 font-normal whitespace-nowrap hover:text-black hover:font-bold'>
                    <Link>{list}</Link>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className='text-sm space-y-3 px-7 py-4'>
            <ul className='space-y-1'>
              <li className='text-red-500 font-bold mb-2'>Fashion Accessorios</li>
              {
                ["Wallets", "Belts", "Perfumes & Body Mists", "Trimmers", "Deodrants", "Ties, Cufflinks & Pocket Squares", "Accessory Gift Sets", "Caps & Hats", "Mufflers, Scarves & Gloves", "Phone Cases", "Rings & Wristwear", "Helmets"].map((list, index) => (
                  <li key={index} className='text-gray-600 font-normal hover:text-black hover:font-bold'>
                    <Link>{list}</Link>
                  </li>
                ))
              }
            </ul>
            <hr className='text-gray-300' />
            <ul >
              <li className='text-red-500 font-bold mb-2 whitespace-nowrap'>Bags & Backpacks</li>
            </ul>
            <ul >
              <li className='text-red-500 font-bold mb-2 whitespace-nowrap'>Luggages & Trolleys</li>
            </ul>
          </div>

        </div>
      </div>


      {/* mobile-dropdown */}
      {
        mobileContext.men == true && (
          <div className=' w-60 fixed lg:opacity-0 transition-opacity duration-300  overflow-scroll right-13 top-16 mx-16 h-full ' style={{ scrollbarWidth: "none" }}>
            <div className='bg-white text-left pb-20 pt-5 grid  grid-cols-1 '>
              <div className='text-sm space-y-3  px-7 py-4'>
                <ul className='space-y-1'>
                  <li className='text-red-500 font-bold mb-2 whitespace-nowrap'>TopWear</li>
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
                  <li className='text-red-500 font-bold mb-2'>Indian & Festive Wears</li>
                  {
                    ["Kurtas & Kurta Sets", "Sherwanis", "Nehru Jackets", "Dhotis"].map((list, index) => (
                      <li key={index} className='text-gray-600 font-normal hover:text-black hover:font-bold'>
                        <Link>{list}</Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className='text-sm space-y-3 px-7 py-4 bg-gray-50'>
                <ul className='space-y-1'>
                  <li className='text-red-500 font-bold mb-2  whitespace-nowrap '>BottomWear</li>
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
                  <li className='text-red-500 font-bold mb-2 whitespace-nowrap'>Innerwear & Sleepwear</li>
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
                  <li className='text-red-500 font-bold mb-2 whitespace-nowrap'>Plus Size</li>
                </ul>
              </div>
              <div className='text-sm space-y-3 px-7 py-4'>
                <ul className='space-y-1'>
                  <li className='text-red-500 font-bold mb-2 whitespace-nowrap'>Footwear</li>
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
                  <li className='text-red-500 font-bold mb-2 whitespace-nowrap'>Personal Care & Grooming</li>
                </ul>
                <ul>
                  <li className='text-red-500 font-bold mb-2 whitespace-nowrap'>Sunglasses & Frames</li>
                </ul>
                <ul>
                  <li className='text-red-500 font-bold mb-2 whitespace-nowrap'>Watches</li>
                </ul>
              </div>
              <div className='text-sm space-y-3 px-7 py-4 bg-gray-50'>
                <ul className='space-y-1'>
                  <li className='text-red-500 font-bold mb-2 whitespace-nowrap'>Sports & Active Wear</li>
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
                  <li className='text-red-500 font-bold mb-2 whitespace-nowrap'>Gadgets</li>
                  {
                    ["Smart Wearables", "Fitness gadgets", "Headphones", "Spearks"].map((list, index) => (
                      <li key={index} className='text-gray-600 font-normal whitespace-nowrap hover:text-black hover:font-bold'>
                        <Link>{list}</Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className='text-sm space-y-3 px-7 py-4'>
                <ul className='space-y-1'>
                  <li className='text-red-500 font-bold mb-2'>Fashion Accesserios</li>
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
                  <li className='text-red-500 font-bold mb-2 whitespace-nowrap'>Bags & Bagpacks</li>
                </ul>
                <ul >
                  <li className='text-red-500 font-bold mb-2 whitespace-nowrap'>Luggages & Trolleys</li>
                </ul>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Men
