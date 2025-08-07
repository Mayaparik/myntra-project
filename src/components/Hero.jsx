import React, { useEffect, useState } from 'react'
import banner1 from '../assets/banner1.png'
import banner2 from '../assets/banner2.png'
import banner3 from '../assets/banner3.png'
import banner4 from '../assets/banner4.png'
import ProductOneSlider from './ProductOneSlider'


function Hero() {

  const banners = [banner1, banner2, banner3, banner4]
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 10000)
    return () => clearInterval(interval)
  }, [banners.length])

  const handleDot = (index) => {
    setCurrent(index)
  }

  return (
    <div>
      <div className='w-full h-[400px] md:h-[500px] lg:h-[800px] relative overflow-hidden lg:pt-16 pt-33'>

        {
          banners.map((image, index) => (
            <img src={image} key={index} alt={`Banner ${index + 1}`} className={`absolute w-full h-full object-cover object-center transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
              }`} />
          ))
        }
        <div className='absolute bottom-4 left-1/2 -translate-x-1/2  flex gap-3'>
          {
            banners.map((dt, index) => (
              <button key={index}
                onClick={() => handleDot(index)}
                className={`w-2 h-2 rounded-full cursor-pointer ${current === index ? "bg-gray-800 scale-130" : "bg-gray-400"}`}></button>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Hero
