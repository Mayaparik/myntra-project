import { React, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { MobileViewContext } from '../components/Navbar';

function Kids() {

  const { mobileContext, setMobileContext } = useContext(MobileViewContext)

  function testing(title) {

    let filterData = {}

    for (let key in mobileContext) {
      console.log(mobileContext[key])
      if (key === title) {
        filterData[key] = !mobileContext[key]
      } else {
        filterData[key] = false
      }
    }
    setMobileContext(filterData)

  }

  return (
    <div className='relative group lg:py-7 py-3 px-4'>
      <button onClick={() =>testing("kids")}>KIDS</button>
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-50 origin-left rounded"></span>
      <div className='w-fit fixed opacity-0 pointer-events-none lg:group-hover:opacity-100 lg:group-hover:pointer-events-auto transition-opacity duration-600 left-0 top-19 mx-14 '>
        <div className='bg-white px-3  grid grid-cols-5 '>
          <div className='text-sm space-y-3 px-7 py-7 tracking-tight'>
            <ul className='space-y-1'>
              <li className='text-orange-500 font-bold mb-2'>Boys Clothing</li>
              {
                ["T-shirts", "Shirts", "Shorts", "Jeans", "Trousers", "Clothing Sets", "Ethnic wear", "Track Pants & Pyjamas", "Jackets, Sweaters & Sweatshirts", "Party Wear", "Innerwear & Tharmals", "Nightwear & Loungewear", "Value Packs"].map((list, index) => (
                  <li key={index} className='text-gray-600 font-normal hover:text-black hover:font-bold'>
                    <Link>{list}</Link>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className='text-sm space-y-3 px-7 py-7 bg-gray-50 '>
            <ul className='space-y-1'>
              <li className='text-orange-500 font-bold mb-2  whitespace-nowrap '>Girls Clothing</li>
              {
                ["Dresses", "Tops", "T-shirts", "Clothing Set", "Lehnga Choli", "Kurta Set", "Party Wear", "Dungarees & Jumpsuits", "Skirt & Shorts", "Tights & Leggins", " Jeans, Trousers & Capris", "Jackets, Sweaters & Sweatshirts", "Innerwear & Thermsls", "Nightwear & Loungewear", "Value Packs"].map((list, index) => (
                  <li key={index} className='text-gray-600 whitespace-nowrap  font-normal hover:text-black hover:font-bold'>
                    <Link>{list}</Link>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className='text-sm space-y-3 px-7 py-7'>
            <ul className='space-y-1'>
              <li className='text-orange-500 font-bold mb-2 whitespace-nowrap'>Footwear</li>
              {
                ["Casual Shoes", "FlipFlop", "Sports Shoes", "Flats", "Sandals", "Heels", "School Shoes", "Socks"].map((list, index) => (
                  <li key={index} className='text-gray-600 font-normal hover:text-black hover:font-bold'>
                    <Link>{list}</Link>
                  </li>
                ))
              }
            </ul>
            <hr className='text-gray-300' />
            <ul className='space-y-1'>
              <li className='text-orange-500 font-bold mb-2 whitespace-nowrap'>toys & Games</li>
              {
                ["Learning & Development", "Activity Toys", "Soft Toys", "Action Figure & Play set"].map((list, index) => (
                  <li key={index} className='text-gray-600 font-normal hover:text-black hover:font-bold'>
                    <Link>{list}</Link>
                  </li>
                ))
              }
            </ul>

          </div>
          <div className='text-sm space-y-3 px-7 py-7 bg-gray-50'>
            <ul className='space-y-1'>
              <li className='text-orange-500 font-bold mb-2 whitespace-nowrap'>Infants</li>
              {
                ["BodySuits", "Rompers & Sleepsuits", "Clothing Sets", "Tshirts & Tops", "Dresses", "Bottom Wear", "Winter Wear", "Innerwear & sleepwear", "Infant Care"].map((list, index) => (
                  <li key={index} className='text-gray-600 font-normal whitespace-nowrap hover:text-black hover:font-bold'>
                    <Link>{list}</Link>
                  </li>
                ))
              }
            </ul>
            <hr className='text-gray-300' />
            <ul className='space-y-1'>
              <li className='text-orange-500 font-bold mb-2 whitespace-nowrap'>Home & Bath</li>
            </ul>
            <ul className='space-y-1'>
              <li className='text-orange-500 font-bold mb-2 whitespace-nowrap'>Personal Care</li>
            </ul>
          </div>
          <div className='text-sm space-y-3 px-7 py-7'>
            <ul className='space-y-1'>
              <li className='text-orange-500 font-bold mb-2 whitespace-nowrap'>Kids Accessories</li>
              {
                ["Bags & Backpacks", "Watches", "Jewellery & Hair accessory", "Sunglasses", "Masks & Protective Gears", "Caps & Hats"].map((list, index) => (
                  <li key={index} className='text-gray-600 font-normal whitespace-nowrap hover:text-black hover:font-bold'>
                    <Link>{list}</Link>
                  </li>
                ))
              }
            </ul>
            <hr className='text-gray-300' />
            <ul className='space-y-1'>
              <li className='text-orange-500 font-bold mb-2 whitespace-nowrap'>Brands</li>
              {
                ["H&M", "Max Kids", "Pantaloons", "United Colors Of Benetton Kids", "YK", "U.S. Polo Assn. Kids", "Mothercase", "HRX"].map((list, index) => (
                  <li key={index} className='text-gray-600 font-normal whitespace-nowrap hover:text-black hover:font-bold'>
                    <Link>{list}</Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile-dropdown */}
      {
        mobileContext.kids == true && (
          <div className=' w-60 fixed lg:opacity-0 transition-opacity duration-300  overflow-scroll right-13 top-16 mx-16 h-full ' style={{ scrollbarWidth: "none" }}>
            <div className='bg-white text-left pb-20 pt-5 grid  grid-cols-1 '>
              <div className='text-sm space-y-3 px-7 py-7 tracking-tight'>
                <ul className='space-y-1'>
                  <li className='text-orange-500 font-bold mb-2'>Boys Clothing</li>
                  {
                    ["T-shirts", "Shirts", "Shorts", "Jeans", "Trousers", "Clothing Sets", "Ethnic wear", "Track Pants & Pyjamas", "Jackets, Sweaters & Sweatshirts", "Party Wear", "Innerwear & Tharmals", "Nightwear & Loungewear", "Value Packs"].map((list, index) => (
                      <li key={index} className='text-gray-600 font-normal hover:text-black hover:font-bold'>
                        <Link>{list}</Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className='text-sm space-y-3 px-7 py-7 bg-gray-50'>
                <ul className='space-y-1'>
                  <li className='text-orange-500 font-bold mb-2  whitespace-nowrap '>Girls Clothing</li>
                  {
                    ["Dresses", "Tops", "T-shirts", "Clothing Set", "Lehnga Choli", "Kurta Set", "Party Wear", "Dungarees & Jumpsuits", "Skirt & Shorts", "Tights & Leggins", " Jeans, Trousers & Capris", "Jackets, Sweaters & Sweatshirts", "Innerwear & Thermsls", "Nightwear & Loungewear", "Value Packs"].map((list, index) => (
                      <li key={index} className='text-gray-600 whitespace-nowrap  font-normal hover:text-black hover:font-bold'>
                        <Link>{list}</Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className='text-sm space-y-3 px-7 py-7'>
                <ul className='space-y-1'>
                  <li className='text-orange-500 font-bold mb-2 whitespace-nowrap'>Footwear</li>
                  {
                    ["Casual Shoes", "FlipFlop", "Sports Shoes", "Flats", "Sandals", "Heels", "School Shoes", "Socks"].map((list, index) => (
                      <li key={index} className='text-gray-600 font-normal hover:text-black hover:font-bold'>
                        <Link>{list}</Link>
                      </li>
                    ))
                  }
                </ul>
                <hr className='text-gray-300' />
                <ul className='space-y-1'>
                  <li className='text-orange-500 font-bold mb-2 whitespace-nowrap'>toys & Games</li>
                  {
                    ["Learning & Development", "Activity Toys", "Soft Toys", "Action Figure & Play set"].map((list, index) => (
                      <li key={index} className='text-gray-600 font-normal hover:text-black hover:font-bold'>
                        <Link>{list}</Link>
                      </li>
                    ))
                  }
                </ul>

              </div>
              <div className='text-sm space-y-3 px-7 py-7 bg-gray-50'>
                <ul className='space-y-1'>
                  <li className='text-orange-500 font-bold mb-2 whitespace-nowrap'>Infants</li>
                  {
                    ["BodySuits", "Rompers & Sleepsuits", "Clothing Sets", "Tshirts & Tops", "Dresses", "Bottom Wear", "Winter Wear", "Innerwear & sleepwear", "Infant Care"].map((list, index) => (
                      <li key={index} className='text-gray-600 font-normal whitespace-nowrap hover:text-black hover:font-bold'>
                        <Link>{list}</Link>
                      </li>
                    ))
                  }
                </ul>
                <hr className='text-gray-300' />
                <ul className='space-y-1'>
                  <li className='text-orange-500 font-bold mb-2 whitespace-nowrap'>Home & Bath</li>
                </ul>
                <ul className='space-y-1'>
                  <li className='text-orange-500 font-bold mb-2 whitespace-nowrap'>Personal Care</li>
                </ul>
              </div>
              <div className='text-sm space-y-3 px-7 py-7'>
                <ul className='space-y-1'>
                  <li className='text-orange-500 font-bold mb-2 whitespace-nowrap'>Kids Accessories</li>
                  {
                    ["Bags & Backpacks", "Watches", "Jewellery & Hair accessory", "Sunglasses", "Masks & Protective Gears", "Caps & Hats"].map((list, index) => (
                      <li key={index} className='text-gray-600 font-normal whitespace-nowrap hover:text-black hover:font-bold'>
                        <Link>{list}</Link>
                      </li>
                    ))
                  }
                </ul>
                <hr className='text-gray-300' />
                <ul className='space-y-1'>
                  <li className='text-orange-500 font-bold mb-2 whitespace-nowrap'>Brands</li>
                  {
                    ["H&M", "Max Kids", "Pantaloons", "United Colors Of Benetton Kids", "YK", "U.S. Polo Assn. Kids", "Mothercase", "HRX"].map((list, index) => (
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

export default Kids
