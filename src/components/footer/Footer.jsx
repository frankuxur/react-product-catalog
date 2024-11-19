import { Link } from 'react-router-dom'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__content">
            <Link to='https://www.ashishfrank.com/' className="footer__left">
                <span>Ashish Frank Kujur</span>
                <i className="ri-arrow-right-up-line icon"></i>
            </Link>

            <div className="footer__line"></div>

            <div className="footer__right">
                <span>Product Catalog</span>
                
                <span>@2024</span>
            </div>
        </div>
    </footer>
  )
}

export default Footer