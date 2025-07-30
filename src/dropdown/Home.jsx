import { React, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { MobileViewContext } from '../components/Navbar';

function Home() {
   
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
    <div className='relative group lg:py-7 py-3 px-4'>
      <button onClick={() => testing("home")}>HOME</button>
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-50 origin-left rounded"></span>

      <div className='w-fit fixed opacity-0 pointer-events-none lg:group-hover:opacity-100 lg:group-hover:pointer-events-auto transition-opacity duration-600 left-0 top-19 mx-14 '>
        <div className='bg-white px-3  grid grid-cols-5 '>
          <div className='text-sm space-y-3 px-7 py-7 tracking-tight'>
            <ul className='space-y-1'>
              <li className='text-orange-500 font-bold mb-2'>Bed Linen & Furnishing</li>
              {
                ["Bed Runners", "Mattress Protectors", "Bedsheets", "Bedding Sets", "Blankets, Quaitls & Dohars", "Pillows & Pillow Covers", "Bed Covers", "Diwan sets", "Chair Pads & Covers", "Sofa Covers"].map((list, index) => (
                  <li key={index} className='text-gray-600 font-normal hover:text-black hover:font-bold'>
                    <Link>{list}</Link>
                  </li>
                ))
              }
            </ul>
            <hr className='text-gray-300' />
            <ul className='space-y-1'>
              <li className='text-orange-500 font-bold mb-2 whitespace-nowrap'>Flooring</li>
              {
                ["Floor Runner", "Carpets", "Floor Mats & Dhurries", "Door Mats"].map((list, index) => (
                  <li key={index} className='text-gray-600 font-normal hover:text-black hover:font-bold'>
                    <Link>{list}</Link>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className='text-sm space-y-3 px-7 py-7 bg-gray-50 '>
            <ul className='space-y-1'>
              <li className='text-orange-500 font-bold mb-2  whitespace-nowrap '>Bath</li>
              {
                ["Bath Towels", "Hand & Face Towels", "Beach Towels", "Towels sets", "Bath Rugs", "Bath Robes", "Bathroom Accessories", "Shower Curtains"].map((list, index) => (
                  <li key={index} className='text-gray-600 whitespace-nowrap  font-normal hover:text-black hover:font-bold'>
                    <Link>{list}</Link>
                  </li>
                ))
              }
            </ul>
            <hr className='text-gray-300' />
            <ul className='space-y-1'>
              <li className='text-orange-500 font-bold mb-2 whitespace-nowrap'>Lamps & Lighting</li>
              {
                ["Floor Lamps", "Ceiling Lamps", "Table Lamps", "Wall Lamps", "Outdoor Lamps", "String Lights"].map((list, index) => (
                  <li key={index} className='text-gray-600 font-normal hover:text-black hover:font-bold'>
                    <Link>{list}</Link>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className='text-sm space-y-3 px-7 py-7'>
            <ul className='space-y-1'>
              <li className='text-orange-500 font-bold mb-2 whitespace-nowrap'>Home Decor</li>
              {
                ["Plants & Planters", "Aromas & Candles", "Clocks", "Mirrors", "Wall Decor", "Festive Decor", "Pooja Essentials", "Wall Shelves", "Fountains", "ShowPieces & Vases", "Ottoman"].map((list, index) => (
                  <li key={index} className='text-gray-600 font-normal hover:text-black hover:font-bold'>
                    <Link>{list}</Link>
                  </li>
                ))
              }
            </ul>
            <hr className='text-gray-300' />
            <ul className='space-y-1'>
              <li className='text-orange-500 font-bold mb-2 whitespace-nowrap cursor-pointer'>Cushions & Cushions Cover</li>
            </ul>
            <hr className='text-gray-300' />
            <ul className='space-y-1'>
              <li className='text-orange-500 font-bold mb-2 whitespace-nowrap cursor-pointer'>Curtains</li>
            </ul>
          </div>
          <div className='text-sm space-y-3 px-7 py-7 bg-gray-50'>
            <ul className='space-y-1'>
              <li className='text-orange-500 font-bold mb-2 whitespace-nowrap'>Furniture</li>
            </ul>

            <ul className='space-y-1'>
              <li className='text-orange-500 font-bold mb-2 whitespace-nowrap'>Home Gits sets</li>
            </ul>

            <ul className='space-y-1'>
              <li className='text-orange-500 font-bold mb-2 whitespace-nowrap'>Kitchen & Tables</li>
              {
                ["Table Runners", "Dinnerware & Serveware", "Cups & Mugs", "Bakeware & Cookware", "Kitchen Storage & Tools", "Bar & Drinkware", "Table Covers & Furnishing"].map((list, index) => (
                  <li key={index} className='text-gray-600 font-normal whitespace-nowrap hover:text-black hover:font-bold'>
                    <Link>{list}</Link>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className='text-sm space-y-3 px-7 py-7'>
            <ul className='space-y-1'>
              <li className='text-orange-500 font-bold mb-2 whitespace-nowrap'>Storage</li>
              {
                ["Bins", "Hangers", "Oragnisers", "Hooks & Holders", "Laundry Bags"].map((list, index) => (
                  <li key={index} className='text-gray-600 font-normal whitespace-nowrap hover:text-black hover:font-bold'>
                    <Link>{list}</Link>
                  </li>
                ))
              }
            </ul>

          </div>
        </div>
      </div>


 {/* mobile-dropdown */}
      {
        mobileContext.home == true && (
          <div className=' w-60 fixed lg:opacity-0 transition-opacity duration-300  overflow-scroll right-13 top-16 mx-16 h-full ' style={{ scrollbarWidth: "none" }}>
            <div className='bg-white text-left pb-20 pt-5 grid  grid-cols-1 '>
              <div className='text-sm space-y-3 px-7 py-7 tracking-tight'>
                <ul className='space-y-1'>
                  <li className='text-orange-500 font-bold mb-2'>Bed Linen & Furnishing</li>
                  {
                    ["Bed Runners", "Mattress Protectors", "Bedsheets", "Bedding Sets", "Blankets, Quaitls & Dohars", "Pillows & Pillow Covers", "Bed Covers", "Diwan sets", "Chair Pads & Covers", "Sofa Covers"].map((list, index) => (
                      <li key={index} className='text-gray-600 font-normal hover:text-black hover:font-bold'>
                        <Link>{list}</Link>
                      </li>
                    ))
                  }
                </ul>
                <hr className='text-gray-300' />
                <ul className='space-y-1'>
                  <li className='text-orange-500 font-bold mb-2 whitespace-nowrap'>Flooring</li>
                  {
                    ["Floor Runner", "Carpets", "Floor Mats & Dhurries", "Door Mats"].map((list, index) => (
                      <li key={index} className='text-gray-600 font-normal hover:text-black hover:font-bold'>
                        <Link>{list}</Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className='text-sm space-y-3 px-7 py-7 bg-gray-50'>
                <ul className='space-y-1'>
                  <li className='text-orange-500 font-bold mb-2  whitespace-nowrap '>Bath</li>
                  {
                    ["Bath Towels", "Hand & Face Towels", "Beach Towels", "Towels sets", "Bath Rugs", "Bath Robes", "Bathroom Accessories", "Shower Curtains"].map((list, index) => (
                      <li key={index} className='text-gray-600 whitespace-nowrap  font-normal hover:text-black hover:font-bold'>
                        <Link>{list}</Link>
                      </li>
                    ))
                  }
                </ul>
                <hr className='text-gray-300' />
                <ul className='space-y-1'>
                  <li className='text-orange-500 font-bold mb-2 whitespace-nowrap'>Lamps & Lighting</li>
                  {
                    ["Floor Lamps", "Ceiling Lamps", "Table Lamps", "Wall Lamps", "Outdoor Lamps", "String Lights"].map((list, index) => (
                      <li key={index} className='text-gray-600 font-normal hover:text-black hover:font-bold'>
                        <Link>{list}</Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className='text-sm space-y-3 px-7 py-7'>
                <ul className='space-y-1'>
                  <li className='text-orange-500 font-bold mb-2 whitespace-nowrap'>Home Decor</li>
                  {
                    ["Plants & Planters", "Aromas & Candles", "Clocks", "Mirrors", "Wall Decor", "Festive Decor", "Pooja Essentials", "Wall Shelves", "Fountains", "ShowPieces & Vases", "Ottoman"].map((list, index) => (
                      <li key={index} className='text-gray-600 font-normal hover:text-black hover:font-bold'>
                        <Link>{list}</Link>
                      </li>
                    ))
                  }
                </ul>
                <hr className='text-gray-300' />
                <ul className='space-y-1'>
                  <li className='text-orange-500 font-bold mb-2 whitespace-nowrap cursor-pointer'>Cushions & Cushions Cover</li>
                </ul>
                <hr className='text-gray-300' />
                <ul className='space-y-1'>
                  <li className='text-orange-500 font-bold mb-2 whitespace-nowrap cursor-pointer'>Curtains</li>
                </ul>
              </div>
              <div className='text-sm space-y-3 px-7 py-7 bg-gray-50'>
                <ul className='space-y-1'>
                  <li className='text-orange-500 font-bold mb-2 whitespace-nowrap'>Furniture</li>
                </ul>

                <ul className='space-y-1'>
                  <li className='text-orange-500 font-bold mb-2 whitespace-nowrap'>Home Gits sets</li>
                </ul>

                <ul className='space-y-1'>
                  <li className='text-orange-500 font-bold mb-2 whitespace-nowrap'>Kitchen & Tables</li>
                  {
                    ["Table Runners", "Dinnerware & Serveware", "Cups & Mugs", "Bakeware & Cookware", "Kitchen Storage & Tools", "Bar & Drinkware", "Table Covers & Furnishing"].map((list, index) => (
                      <li key={index} className='text-gray-600 font-normal whitespace-nowrap hover:text-black hover:font-bold'>
                        <Link>{list}</Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className='text-sm space-y-3 px-7 py-7'>
                <ul className='space-y-1'>
                  <li className='text-orange-500 font-bold mb-2 whitespace-nowrap'>Storage</li>
                  {
                    ["Bins", "Hangers", "Oragnisers", "Hooks & Holders", "Laundry Bags"].map((list, index) => (
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

export default Home
