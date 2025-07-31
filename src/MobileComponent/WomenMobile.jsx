import { useState } from 'react'
import { Link } from 'react-router-dom'

function WomenMobile() {

  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen(!isOpen)

  return (
    <div>
      <div className={`flex justify-between items-center px-2 ${isOpen ? "bg-pink-600/80" : "bg-white"}`} onClick={toggleDropdown}>
        <button className='py-2'>Women</button>
        <p><i class="bi bi-chevron-down"></i></p>
      </div>
      {
        isOpen && (
          <div className='transition-all duration-300 overflow-scroll' style={{ scrollbarWidth: "none" }}>
            <div className='bg-white text-left space-y-2 py-2 px-2 grid  grid-cols-1 '>
              <div className='text-sm space-y-3'>
                <ul className='space-y-1'>
                  <li className='text-pink-600/80 font-bold mb-2'>Indian & Fusion Wears</li>
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
                  <li className='text-pink-600/80 font-bold mb-2 whitespace-nowrap'>Belt, Scarves & More</li>
                </ul>
                <ul className='space-y-1'>
                  <li className='text-pink-600/80 font-bold mb-2 whitespace-nowrap'>Watches & wearables</li>
                </ul>
              </div>
              <div className='text-sm space-y-3'>
                <ul className='space-y-1'>
                  <li className='text-pink-600/80 font-bold mb-2  whitespace-nowrap '>Westren Wear</li>
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
                  <li className='text-pink-600/80 font-bold mb-2 whitespace-nowrap'>Plus Size</li>
                </ul>
              </div>
              <div className='text-sm space-y-3'>
                <ul>
                  <li className='text-pink-600/80 font-bold mb-2 whitespace-nowrap'>Maternity</li>
                </ul>
                <ul>
                  <li className='text-pink-600/80 font-bold mb-2 whitespace-nowrap'>Sunglasses & Frames</li>
                </ul>
                <ul className='space-y-1'>
                  <li className='text-pink-600/80 font-bold mb-2 whitespace-nowrap'>Footwear</li>
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
                  <li className='text-pink-600/80 font-bold mb-2 whitespace-nowrap'>Sports & Active Wear</li>
                  {
                    ["Clothing", "Footwear", "Sports Accessories", "Sports Equipment"].map((list, index) => (
                      <li key={index} className='text-gray-600 font-normal hover:text-black hover:font-bold'>
                        <Link>{list}</Link>
                      </li>
                    ))
                  }
                </ul>

              </div>
              <div className='text-sm space-y-3'>
                <ul className='space-y-1'>
                  <li className='text-pink-600/80 font-bold mb-2 whitespace-nowrap'>Lingeries & Sleepwear</li>
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
                  <li className='text-pink-600/80 font-bold mb-2 whitespace-nowrap'>Beauty & Personal Care</li>
                  {
                    ["Makeup", "Skincare", "Premium Beauty", "Lipsticks", "Fragrance"].map((list, index) => (
                      <li key={index} className='text-gray-600 font-normal whitespace-nowrap hover:text-black hover:font-bold'>
                        <Link>{list}</Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className='text-sm space-y-3'>
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
                <hr className='text-gray-300' />
                <ul className='space-y-1'>
                  <li className='text-pink-600/80 font-bold mb-2 whitespace-nowrap'>Jewellery</li>
                  {
                    ["Fashion Jewellery", "Fine Jewellery", "Earrings"].map((list, index) => (
                      <li key={index} className='text-gray-600 font-normal whitespace-nowrap hover:text-black hover:font-bold'>
                        <Link>{list}</Link>
                      </li>
                    ))
                  }
                </ul>
                <ul >
                  <li className='text-pink-600/80 font-bold mb-2 whitespace-nowrap'>Backpacks</li>
                </ul>
                <ul >
                  <li className='text-pink-600/80 font-bold mb-2 whitespace-nowrap'>Handbags, Bags & Wallets</li>
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

export default WomenMobile
