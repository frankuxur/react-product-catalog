import { useState } from 'react'
import CartButton from './CartButton'
import './header.css'
import Navbar from './Navbar'
import Cart from './Cart'
import { Link } from 'react-router-dom'
import Searchbar from './Searchbar'

const Header = ({ showSearchbar }) => {

  const [showCart, setShowCart] = useState(false)

  return (
    <header className="header">
      <div className="header__content">
        {/* logo */}
        <Link to={'/'} className="header__logo" style={{ marginRight: showSearchbar ? '' : 'auto' }}>
          <span>furni.</span>
        </Link>
        
        <Navbar />

        {/* shows searchbar only when in home page  */}
        {showSearchbar && <Searchbar />}

        {/* cart button */}
        <CartButton setShowCart={setShowCart} />

        {/* cart */}
        <Cart showCart={showCart} />

        <button className="header__user">
          <i className="ri-user-line icon"></i>
        </button>

      </div>
    </header>
  )
}

export default Header