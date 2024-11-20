import { Link, useLocation } from 'react-router-dom'
import './product-details.css'
import { useContext } from 'react';
import { ProductsContext } from '../../state/context/ProductsContext';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { Toaster } from 'react-hot-toast';

const ProductDetails = () => {
  //  access product data when link clicked on the product card moves to details page
  const location = useLocation();
  const product = location.state;

  const { addToCart } = useContext(ProductsContext)
  const { id, description, name, price, category, image } = product

  //  showing product details   
  return (
    <>
        <Header showSearchbar={false} />
            <main className="details">
                <div className="details__content">
                    <Link className='details__back' to={'/'}>
                        <i className="ri-arrow-left-s-line icon"></i>
                        back
                    </Link>

                    <div className="details__info">
                        <img className='details__image' src={image} alt={name} />

                        <div>
                            <h2 className="details__title">{name}</h2>
                            <div className='details__category'>{category}</div>                        
                            <p className='details__description'>{description}</p>
                            <div className="details__line"></div>

                            <div className="details__buttons">
                                <div className="details__price">₹{price}</div>
                                <button onClick={() => addToCart(id)} className="details__cart">
                                    Add to cart
                                    <i className="ri-shopping-bag-2-line icon"></i>
                                </button>
                                <button className="details__fav">
                                    <i className="ri-heart-line icon"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        <Footer />
      
        <Toaster position="bottom-right" />
    </>
  )
}

export default ProductDetails