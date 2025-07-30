import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import PageRoute from './PageRoute.jsx';
import { WishlistProvider } from './context/WishlistContext.jsx';
import { CartProvider } from './context/CartContext.jsx';
import { Toaster } from 'react-hot-toast';
import { SearchProvider } from './context/SearchContext.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter >
    <SearchProvider>
      <WishlistProvider >
        <CartProvider >
          <StrictMode>
            {/* <App /> */}
            <Toaster position="top-center" />
            <PageRoute />
          </StrictMode>
        </CartProvider>
      </WishlistProvider>
    </SearchProvider>
  </BrowserRouter>
)
