import { Link } from 'react-router-dom'
import { React, useContext, useState } from 'react'
import { MobileViewContext } from '../components/Navbar';

function Women() {

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
      <button onClick={() =>testing("women")}>WOMEN</button>
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-fuchsia-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-50 origin-left rounded"></span>

      <div className='w-fit fixed opacity-0 pointer-events-none lg:group-hover:opacity-100 lg:group-hover:pointer-events-auto transition-opacity duration-600 left-0 top-19 mx-14 '>
        <div className='bg-white px-3  grid grid-cols-5 '>
          <div className='text-sm space-y-3 px-7 py-7'>
            <ul className='space-y-1'>
              <li className='text-fuchsia-500 font-bold mb-2'>Indian & Fusion Wears</li>
              {
                ["Kurtas & Suits", "Kurti, Tunics & Tops", "Sarees", "Ethnic Wear", "Leggigns, Salvars & chudidars", "Skirts & Palazzos", "Dress Materials", "Lehnga Cholis", "Dupattas & shawls", "Jackets"].map((list, index) => (
                  <li key={index} className='text-gray-600 font-normal hover:text-black hover:font-bold'>
                    <Link>{list}</Link>
                  </li>
                ))
              }
            </ul>
            <hr className='text-gray-300' />
            <ul className='space-y-1'>
              <li className='text-fuchsia-500 font-bold mb-2 whitespace-nowrap'>Belt, Scarves & More</li>
            </ul>
            <ul className='space-y-1'>
              <li className='text-fuchsia-500 font-bold mb-2 whitespace-nowrap'>Watches & wearables</li>
            </ul>
          </div>
          <div className='text-sm space-y-3 px-7 py-7 bg-gray-50'>
            <ul className='space-y-1'>
              <li className='text-fuchsia-400 font-bold mb-2  whitespace-nowrap '>Westren Wear</li>
              {
                ["Dresses", "Tops", "T-shirts", "Jeans", "Trousers & Capris", "Shorts & Skirts", "Co-ords", "Playsuits", "Jumpsuits", "Shrugs", "Sweaters & Sweatshirts", "Jackets & Coats", "Blazers & Waistcoats"].map((list, index) => (
                  <li key={index} className='text-gray-600 whitespace-nowrap  font-normal hover:text-black hover:font-bold'>
                    <Link>{list}</Link>
                  </li>
                ))
              }
            </ul>

            <hr className='text-gray-300' />
            <ul>
              <li className='text-fuchsia-500 font-bold mb-2 whitespace-nowrap'>Plus Size</li>
            </ul>
          </div>
          <div className='text-sm space-y-3 px-7 py-7'>
            <ul>
              <li className='text-fuchsia-500 font-bold mb-2 whitespace-nowrap'>Maternity</li>
            </ul>
            <ul>
              <li className='text-fuchsia-500 font-bold mb-2 whitespace-nowrap'>Sunglasses & Frames</li>
            </ul>
            <ul className='space-y-1'>
              <li className='text-fuchsia-500 font-bold mb-2 whitespace-nowrap'>Footwear</li>
              {
                ["Flats", "Casual Shoes", "Heels", "Boots", "Sports Shoes & Floaters"].map((list, index) => (
                  <li key={index} className='text-gray-600 font-normal hover:text-black hover:font-bold'>
                    <Link>{list}</Link>
                  </li>
                ))
              }
            </ul>
            <hr className='text-gray-300' />
            <ul className='space-y-1'>
              <li className='text-fuchsia-500 font-bold mb-2 whitespace-nowrap'>Sports & Active Wear</li>
              {
                ["Clothing", "Footwear", "Sports Accessories", "Sports Equipment"].map((list, index) => (
                  <li key={index} className='text-gray-600 font-normal hover:text-black hover:font-bold'>
                    <Link>{list}</Link>
                  </li>
                ))
              }
            </ul>

          </div>
          <div className='text-sm space-y-3 px-7 py-7 bg-gray-50'>
            <ul className='space-y-1'>
              <li className='text-fuchsia-500 font-bold mb-2 whitespace-nowrap'>Lingeries & Sleepwear</li>
              {
                ["Bra", "Briefs", "Shapewear", "Sleepwear & loungewear", "Swimmwear", "Camisoles & Thermals"].map((list, index) => (
                  <li key={index} className='text-gray-600 font-normal whitespace-nowrap hover:text-black hover:font-bold'>
                    <Link>{list}</Link>
                  </li>
                ))
              }
            </ul>
            <hr className='text-gray-300' />
            <ul className='space-y-1'>
              <li className='text-fuchsia-500 font-bold mb-2 whitespace-nowrap'>Beauty & Personal Care</li>
              {
                ["Makeup", "Skincare", "Premium Beauty", "Lipsticks", "Fragrance"].map((list, index) => (
                  <li key={index} className='text-gray-600 font-normal whitespace-nowrap hover:text-black hover:font-bold'>
                    <Link>{list}</Link>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className='text-sm space-y-3 px-7 py-7'>
            <ul className='space-y-1'>
              <li className='text-fuchsia-500 font-bold mb-2 whitespace-nowrap'>Gadgets</li>
              {
                ["Smart Wearables", "Fitness gadgets", "Headphones", "Spearks"].map((list, index) => (
                  <li key={index} className='text-gray-600 font-normal whitespace-nowrap hover:text-black hover:font-bold'>
                    <Link>{list}</Link>
                  </li>
                ))
              }
            </ul>
            <hr className='text-gray-300' />
            <ul className='space-y-1'>
              <li className='text-fuchsia-500 font-bold mb-2 whitespace-nowrap'>Jewellery</li>
              {
                ["Fashion Jewellery", "Fine Jewellery", "Earrings"].map((list, index) => (
                  <li key={index} className='text-gray-600 font-normal whitespace-nowrap hover:text-black hover:font-bold'>
                    <Link>{list}</Link>
                  </li>
                ))
              }
            </ul>
            <ul >
              <li className='text-fuchsia-500 font-bold mb-2 whitespace-nowrap'>Backpacks</li>
            </ul>
            <ul >
              <li className='text-fuchsia-500 font-bold mb-2 whitespace-nowrap'>Handbags, Bags & Wallets</li>
            </ul>
            <ul >
              <li className='text-fuchsia-500 font-bold mb-2 whitespace-nowrap'>Luggages & Trolleys</li>
            </ul>
          </div>
        </div>
      </div>


{/* mobile-dropdown */}
      {
        mobileContext.women == true && (
          <div className=' w-60 fixed lg:opacity-0 transition-opacity duration-300  overflow-scroll right-13 top-16 mx-16 h-full ' style={{ scrollbarWidth: "none" }}>
            <div className='bg-white text-left pb-20 pt-5 grid  grid-cols-1 '>
              <div className='text-sm space-y-3 px-7 py-7'>
                <ul className='space-y-1'>
                  <li className='text-fuchsia-500 font-bold mb-2'>Indian & Fusion Wears</li>
                  {
                    ["Kurtas & Suits", "Kurti, Tunics & Tops", "Sarees", "Ethnic Wear", "Leggigns, Salvars & chudidars", "Skirts & Palazzos", "Dress Materials", "Lehnga Cholis", "Dupattas & shawls", "Jackets"].map((list, index) => (
                      <li key={index} className='text-gray-600 font-normal hover:text-black hover:font-bold'>
                        <Link>{list}</Link>
                      </li>
                    ))
                  }
                </ul>
                <hr className='text-gray-300' />
                <ul className='space-y-1'>
                  <li className='text-fuchsia-500 font-bold mb-2 whitespace-nowrap'>Belt, Scarves & More</li>
                </ul>
                <ul className='space-y-1'>
                  <li className='text-fuchsia-500 font-bold mb-2 whitespace-nowrap'>Watches & wearables</li>
                </ul>
              </div>
              <div className='text-sm space-y-3 px-7 py-7 bg-gray-50'>
                <ul className='space-y-1'>
                  <li className='text-fuchsia-400 font-bold mb-2  whitespace-nowrap '>Westren Wear</li>
                  {
                    ["Dresses", "Tops", "T-shirts", "Jeans", "Trousers & Capris", "Shorts & Skirts", "Co-ords", "Playsuits", "Jumpsuits", "Shrugs", "Sweaters & Sweatshirts", "Jackets & Coats", "Blazers & Waistcoats"].map((list, index) => (
                      <li key={index} className='text-gray-600 whitespace-nowrap  font-normal hover:text-black hover:font-bold'>
                        <Link>{list}</Link>
                      </li>
                    ))
                  }
                </ul>

                <hr className='text-gray-300' />
                <ul>
                  <li className='text-fuchsia-500 font-bold mb-2 whitespace-nowrap'>Plus Size</li>
                </ul>
              </div>
              <div className='text-sm space-y-3 px-7 py-7'>
                <ul>
                  <li className='text-fuchsia-500 font-bold mb-2 whitespace-nowrap'>Maternity</li>
                </ul>
                <ul>
                  <li className='text-fuchsia-500 font-bold mb-2 whitespace-nowrap'>Sunglasses & Frames</li>
                </ul>
                <ul className='space-y-1'>
                  <li className='text-fuchsia-500 font-bold mb-2 whitespace-nowrap'>Footwear</li>
                  {
                    ["Flats", "Casual Shoes", "Heels", "Boots", "Sports Shoes & Floaters"].map((list, index) => (
                      <li key={index} className='text-gray-600 font-normal hover:text-black hover:font-bold'>
                        <Link>{list}</Link>
                      </li>
                    ))
                  }
                </ul>
                <hr className='text-gray-300' />
                <ul className='space-y-1'>
                  <li className='text-fuchsia-500 font-bold mb-2 whitespace-nowrap'>Sports & Active Wear</li>
                  {
                    ["Clothing", "Footwear", "Sports Accessories", "Sports Equipment"].map((list, index) => (
                      <li key={index} className='text-gray-600 font-normal hover:text-black hover:font-bold'>
                        <Link>{list}</Link>
                      </li>
                    ))
                  }
                </ul>

              </div>
              <div className='text-sm space-y-3 px-7 py-7 bg-gray-50'>
                <ul className='space-y-1'>
                  <li className='text-fuchsia-500 font-bold mb-2 whitespace-nowrap'>Lingeries & Sleepwear</li>
                  {
                    ["Bra", "Briefs", "Shapewear", "Sleepwear & loungewear", "Swimmwear", "Camisoles & Thermals"].map((list, index) => (
                      <li key={index} className='text-gray-600 font-normal whitespace-nowrap hover:text-black hover:font-bold'>
                        <Link>{list}</Link>
                      </li>
                    ))
                  }
                </ul>
                <hr className='text-gray-300' />
                <ul className='space-y-1'>
                  <li className='text-fuchsia-500 font-bold mb-2 whitespace-nowrap'>Beauty & Personal Care</li>
                  {
                    ["Makeup", "Skincare", "Premium Beauty", "Lipsticks", "Fragrance"].map((list, index) => (
                      <li key={index} className='text-gray-600 font-normal whitespace-nowrap hover:text-black hover:font-bold'>
                        <Link>{list}</Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className='text-sm space-y-3 px-7 py-7'>
                <ul className='space-y-1'>
                  <li className='text-fuchsia-500 font-bold mb-2 whitespace-nowrap'>Gadgets</li>
                  {
                    ["Smart Wearables", "Fitness gadgets", "Headphones", "Spearks"].map((list, index) => (
                      <li key={index} className='text-gray-600 font-normal whitespace-nowrap hover:text-black hover:font-bold'>
                        <Link>{list}</Link>
                      </li>
                    ))
                  }
                </ul>
                <hr className='text-gray-300' />
                <ul className='space-y-1'>
                  <li className='text-fuchsia-500 font-bold mb-2 whitespace-nowrap'>Jewellery</li>
                  {
                    ["Fashion Jewellery", "Fine Jewellery", "Earrings"].map((list, index) => (
                      <li key={index} className='text-gray-600 font-normal whitespace-nowrap hover:text-black hover:font-bold'>
                        <Link>{list}</Link>
                      </li>
                    ))
                  }
                </ul>
                <ul >
                  <li className='text-fuchsia-500 font-bold mb-2 whitespace-nowrap'>Backpacks</li>
                </ul>
                <ul >
                  <li className='text-fuchsia-500 font-bold mb-2 whitespace-nowrap'>Handbags, Bags & Wallets</li>
                </ul>
                <ul >
                  <li className='text-fuchsia-500 font-bold mb-2 whitespace-nowrap'>Luggages & Trolleys</li>
                </ul>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Women
