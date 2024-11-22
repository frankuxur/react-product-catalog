import './not-found.css'
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <main className="not-found">
        <div className="not-found__content">
            <div className="not-found__logo">
                <Link to={'/'} class="header__logo">
                    <span>furni.</span>
                </Link>
            </div>

            <h1 className='not-found__title'>404 page not found</h1>
        
            <Link to={'/'} className='not-found__back'>
                <i className="ri-arrow-drop-left-line icon"></i>

                <span>back to home page</span>
            </Link>
        </div>
    </main>
  )
}

export default NotFound