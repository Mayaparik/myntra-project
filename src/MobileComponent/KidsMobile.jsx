import { useState } from 'react'
import { Link } from 'react-router-dom'

function KidsMobile() {

  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen(!isOpen)

  return (
    <div>
      <div className={`flex justify-between items-center px-2 ${isOpen ? "bg-pink-600/80" : "bg-white"}`} onClick={toggleDropdown}>
        <button className='py-2'>kids</button>
        <p><i class="bi bi-chevron-down"></i></p>
      </div>
      {
        isOpen && (
          <div className='transition-all duration-300 overflow-scroll' style={{ scrollbarWidth: "none" }}>
            <div className='bg-white text-left space-y-2 py-2 px-2 grid  grid-cols-1 '>
              <div className='text-sm space-y-3 tracking-tight'>
                <ul className='space-y-1'>
                  <li className='text-pink-600/80 font-bold mb-2'>Boys Clothing</li>
                  {
                    ["T-shirts", "Shirts", "Shorts", "Jeans", "Trousers", "Clothing Sets", "Ethnic wear", "Track Pants & Pyjamas", "Jackets, Sweaters & Sweatshirts", "Party Wear", "Innerwear & Tharmals", "Nightwear & Loungewear", "Value Packs"].map((list, index) => (
                      <li key={index} className='text-gray-600 font-normal hover:text-black hover:font-bold'>
                        <Link>{list}</Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className='text-sm space-y-3'>
                <ul className='space-y-1'>
                  <li className='text-pink-600/80 font-bold mb-2  whitespace-nowrap '>Girls Clothing</li>
                  {
                    ["Dresses", "Tops", "T-shirts", "Clothing Set", "Lehnga Choli", "Kurta Set", "Party Wear", "Dungarees & Jumpsuits", "Skirt & Shorts", "Tights & Leggins", " Jeans, Trousers & Capris", "Jackets, Sweaters & Sweatshirts", "Innerwear & Thermsls", "Nightwear & Loungewear", "Value Packs"].map((list, index) => (
                      <li key={index} className='text-gray-600 whitespace-nowrap  font-normal hover:text-black hover:font-bold'>
                        <Link>{list}</Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className='text-sm space-y-3'>
                <ul className='space-y-1'>
                  <li className='text-pink-600/80 font-bold mb-2 whitespace-nowrap'>Footwear</li>
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
                  <li className='text-pink-600/80 font-bold mb-2 whitespace-nowrap'>toys & Games</li>
                  {
                    ["Learning & Development", "Activity Toys", "Soft Toys", "Action Figure & Play set"].map((list, index) => (
                      <li key={index} className='text-gray-600 font-normal hover:text-black hover:font-bold'>
                        <Link>{list}</Link>
                      </li>
                    ))
                  }
                </ul>

              </div>
              <div className='text-sm space-y-3'>
                <ul className='space-y-1'>
                  <li className='text-pink-600/80 font-bold mb-2 whitespace-nowrap'>Infants</li>
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
                  <li className='text-pink-600/80 font-bold mb-2 whitespace-nowrap'>Home & Bath</li>
                </ul>
                <ul className='space-y-1'>
                  <li className='text-pink-600/80 font-bold mb-2 whitespace-nowrap'>Personal Care</li>
                </ul>
              </div>
              <div className='text-sm space-y-3'>
                <ul className='space-y-1'>
                  <li className='text-pink-600/80 font-bold mb-2 whitespace-nowrap'>Kids Accessories</li>
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
                  <li className='text-pink-600/80 font-bold mb-2 whitespace-nowrap'>Brands</li>
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

export default KidsMobile
