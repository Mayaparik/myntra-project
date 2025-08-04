import React from 'react'
import Hero from './Hero'
import ProductOneSlider from './ProductOneSlider'
import ProductTwoSlider from './ProductTwoSlider'
import Mobiles from './categories/Mobiles'

function Home() {
    return (
        <>
            <Hero />
            <ProductOneSlider />
            <ProductTwoSlider />
            <Mobiles />
        </>
    )
}

export default Home
