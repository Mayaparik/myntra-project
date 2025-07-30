import React from 'react'

function Studio() {
  return (
    <div className='relative group lg:py-7 py-3 px-4'>
      <button>STUDIO</button>
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-50 origin-left rounded"></span>
    </div>
  )
}

export default Studio
