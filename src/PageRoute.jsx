import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SignUp from './components/auth/SignUp'
import Terms from './components/auth/Terms'
import Policy from './components/auth/Policy'
import Footer from './components/Footer'
import ProductOneSlider from './components/ProductOneSlider'
import ProductTwoSlider from './components/ProductTwoSlider'
import Mobiles from './components/categories/Mobiles'
import Category from './components/Category'
import Wishlist from './components/Wishlist'
import Cart from './components/Cart'
import ProductDetails from './components/ProductDetails'
import ProductDetailsTwo from './components/ProductDetailsTwo'
import ScrollToTop from './components/ScrollToTop'
import BuyNow from './components/BuyNow'
import Home from './components/Home'
import PagenotFound from './components/PagenotFound'



function PageRoute() {
  return (
    <div>
      <BrowserRouter >
        <ScrollToTop />
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/termsofuse' element={<Terms />} />
            <Route path='/privacypolicy' element={<Policy />} />
            <Route path='/category' element={<Category />} />
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/buy-now' element={<BuyNow />} />
            <Route path='/product-dummy/:productId' element={<ProductDetails />} />
            <Route path='/product-escuela/:listId' element={<ProductDetailsTwo />} />

            <Route path='*' element={<PagenotFound />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default PageRoute
