import { useState } from 'react'
import { Link } from 'react-router-dom'

function HomeMobile() {

  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen(!isOpen)

  return (
    <div>
      <div className={`flex justify-between items-center px-2 ${isOpen ? "bg-pink-600/80" : "bg-white"}`} onClick={toggleDropdown}>
        <button className='py-2'>Home & Living</button>
        <p><i class="bi bi-chevron-down"></i></p>
      </div>
      {
        isOpen && (
          <div className='transition-all duration-300 overflow-scroll ' style={{ scrollbarWidth: "none" }}>
            <div className='bg-white text-left py-2 space-y-2 px-2 grid  grid-cols-1 '>
              <div className='text-sm space-y-3  tracking-tight'>
                <ul className='space-y-1'>
                  <li className='text-pink-600/80 font-bold mb-2'>Bed Linen & Furnishing</li>
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
                  <li className='text-pink-600/80 font-bold mb-2 whitespace-nowrap'>Flooring</li>
                  {
                    ["Floor Runner", "Carpets", "Floor Mats & Dhurries", "Door Mats"].map((list, index) => (
                      <li key={index} className='text-gray-600 font-normal hover:text-black hover:font-bold'>
                        <Link>{list}</Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className='text-sm space-y-3'>
                <ul className='space-y-1'>
                  <li className='text-pink-600/80 font-bold mb-2  whitespace-nowrap '>Bath</li>
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
                  <li className='text-pink-600/80 font-bold mb-2 whitespace-nowrap'>Lamps & Lighting</li>
                  {
                    ["Floor Lamps", "Ceiling Lamps", "Table Lamps", "Wall Lamps", "Outdoor Lamps", "String Lights"].map((list, index) => (
                      <li key={index} className='text-gray-600 font-normal hover:text-black hover:font-bold'>
                        <Link>{list}</Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className='text-sm space-y-3'>
                <ul className='space-y-1'>
                  <li className='text-pink-600/80 font-bold mb-2 whitespace-nowrap'>Home Decor</li>
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
                  <li className='text-pink-600/80 font-bold mb-2 whitespace-nowrap cursor-pointer'>Cushions & Cushions Cover</li>
                </ul>
                <hr className='text-gray-300' />
                <ul className='space-y-1'>
                  <li className='text-pink-600/80 font-bold mb-2 whitespace-nowrap cursor-pointer'>Curtains</li>
                </ul>
              </div>
              <div className='text-sm space-y-3'>
                <ul className='space-y-1'>
                  <li className='text-pink-600/80 font-bold mb-2 whitespace-nowrap'>Furniture</li>
                </ul>

                <ul className='space-y-1'>
                  <li className='text-pink-600/80 font-bold mb-2 whitespace-nowrap'>Home Gits sets</li>
                </ul>

                <ul className='space-y-1'>
                  <li className='text-pink-600/80 font-bold mb-2 whitespace-nowrap'>Kitchen & Tables</li>
                  {
                    ["Table Runners", "Dinnerware & Serveware", "Cups & Mugs", "Bakeware & Cookware", "Kitchen Storage & Tools", "Bar & Drinkware", "Table Covers & Furnishing"].map((list, index) => (
                      <li key={index} className='text-gray-600 font-normal whitespace-nowrap hover:text-black hover:font-bold'>
                        <Link>{list}</Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className='text-sm space-y-3'>
                <ul className='space-y-1'>
                  <li className='text-pink-600/80 font-bold mb-2 whitespace-nowrap'>Storage</li>
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

export default HomeMobile
