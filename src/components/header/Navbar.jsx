import { Link } from "react-router-dom"

const Navbar = () => {
  return (
          
    <nav className="nav">
      <div className="nav__content">
        <button className="nav__button">
          <i className="ri-menu-line icon"></i>
        </button>
        
        <ul className="nav__items">
          <li className="nav__item">
            <Link to={'/'} onClick={e => e.preventDefault()} className="nav__link">about</Link>
          </li>

          <li className="nav__item">
            <Link to={'/'} onClick={e => e.preventDefault()} className="nav__link">services</Link>
          </li>
          
          <li className="nav__item nav__item-contact">
            <Link to={'/'} onClick={e => e.preventDefault()} className="nav__link">contact</Link>
          </li>           
        </ul>
      </div>
    </nav>
  )
}

export default Navbar