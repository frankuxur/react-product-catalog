import { useState } from 'react'
import CartButton from './CartButton'
import './header.css'
import Navbar from './Navbar'
import Searchbar from './Searchbar'
import Cart from './Cart'
import { Link } from 'react-router-dom'

const Header = ({ showSearchbar }) => {

  const [showCart, setShowCart] = useState(false)

  return (
    <header className="header">
      <div className="header__content">
        <Link to={'/'} className="header__logo" style={{ marginRight: showSearchbar ? '' : 'auto' }}>
          <span>furni.</span>
        </Link>
        
        <Navbar />

        {showSearchbar && <Searchbar />}

        <CartButton setShowCart={setShowCart} />

        <Cart showCart={showCart} showSearchbar={showSearchbar} />

        <button className="header__user">
          <i className="ri-user-line icon"></i>
        </button>

      </div>
    </header>
  )
}

export default Header